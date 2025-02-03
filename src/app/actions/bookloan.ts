"use server";

import { prisma } from "@/lib/prisma";
import { bookloan } from "@prisma/client";
//import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
//import { revalidatePath } from "next/cache";

// export type OverdueLoan = {
// where: {id: string},
// data: {status: Status},
// }
// export type OverdueLoans = OverdueLoan[];

export async function getBookLoans() {
  let loans = await prisma.bookloan.findMany({
    include: {
      book: true,
      member: true,
    },
    orderBy: { status: "asc"}
  });
  const today = new Date();
  const overDue: string[] = [];

  loans.map((loan) => {
    if (loan.dueDate < today && loan.status === "ACTIVE") {
      overDue.push(loan.id);
    }
  });
  console.log(overDue);
  try {
    if (overDue.length !== 0) {
      await prisma.bookloan.updateMany({
        where: {
          id: {
            in: overDue,
          },
        },
        data: {
          status: "OVERDUE",
        },
      });
      loans = await prisma.bookloan.findMany({
        include: {
          book: true,
          member: true,
        },
      });
    }
  } catch (e) {
    console.log(e);
  }

  return loans;
}

export async function getActiveBookLoans() {
  const loans = await prisma.bookloan.findMany({
    where: {
      status: {
        not: "RETURNED",
      },
    },
    include: {
      book: true,
      member: true,
    },
  });
  
  return loans;
}

export async function getReturnedBookLoans() {
  const loans = await prisma.bookloan.findMany({
    where: {
      status:  "RETURNED",
    },
    include: {
      book: true,
      member: true,
    },
  });
  
  return loans;
}

// enum Status {
//   ACTIVE,
//   RETURNED,
//   OVERDUE,
// }
// const StatusEnum = z.nativeEnum({Status})
// type StatusEnum = z.infer<typeof StatusEnum>;

const formSchema = z
  .object({
    id: z.string().optional(),
    bookId: z.string(),
    memberId: z.string(),
    status: z.enum(["ACTIVE", "RETURNED", "OVERDUE"]).optional(),
    returnDate: z.string().date().optional(),
  });

export async function CreateBookLoan(previousState: unknown, formData: FormData) {
    
    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }

    const activeLoan = await prisma.bookloan.findFirst({
      where: {
        bookId: result.data.bookId,
        status: "ACTIVE",
      },
    });
    if (activeLoan !== null) {
      return {
        fieldErrors: {
          bookId: ["Book is already loaned out."],
          memberId: [""],
        },
      };
    }

    const userLoans = await prisma.bookloan.findMany({
      where: {
        memberId: result.data.memberId,
        status: {not: "RETURNED"},
      },
    });
    if (userLoans.length >= 3) {
      return {
        fieldErrors: {
          bookId: [""],
          memberId: ["Use alread has loaned 3 books"],
        },
      };
    }
    userLoans.map((loan) => {
      if(loan.status === "OVERDUE")
      {
        return {
          fieldErrors: {
            bookId: [""],
            memberId: ["User has an overdue book."],
          },
        };
      }
    })

    const loan = await prisma.bookloan.create({
      data: {
        bookId: result.data.bookId,
        memberId: result.data.memberId,
        status: "ACTIVE",
        loanDate: new Date(),
        dueDate: new Date(Date.now() + 12096e5),
      },
    });

    revalidatePath("/");
        console.log(loan.id);
        console.log(result.data);
}

// export async function UpdateBookLoan(previousState: unknown, formData: FormData) {
//     const result = formSchema.safeParse(Object.fromEntries(formData));
//     if (!result.success) {
//       console.log(result.error.flatten());
//       return result.error.flatten();
//     }
// }

export async function ExtendBookLoan(loan: bookloan) {
  const newDue: Date = loan.dueDate;
  const today: Date = new Date();
  newDue.setDate(newDue.getDate() + 7);
  try {
    if((loan.status === "OVERDUE") && (today < newDue) ) {
      await prisma.bookloan.update({
        where: {
          id: loan.id,
          },
        data: {
          dueDate: newDue,
          status: "ACTIVE",
        },
      });
    } else {
      await prisma.bookloan.update({
        where: {
          id: loan.id,
          },
        data: {
          dueDate: newDue,
        },
      });
    }
  } catch (e) {
    console.log(e)
  }
  revalidatePath("/");
}

export async function ReturnBookLoan(loan: bookloan) {
  try {
    if (loan.status === "RETURNED") {
      console.log("already returned");
    } else {
      await prisma.bookloan.update({
        where: {
          id: loan.id,
        },
        data: {
          status: "RETURNED",
          returnDate: new Date(),
        },
      });
    }
  } catch (e) {
    console.log(e);
  }
  revalidatePath("/");
}

export async function DeleteBookLoan(id: string) {
  await prisma.bookloan.delete({
    where: {
      id,
      },
  });
  revalidatePath("/");
}
