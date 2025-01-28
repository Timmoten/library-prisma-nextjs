"use server";

import { prisma } from "@/lib/prisma";
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
  const loans = await prisma.bookloan.findMany({
    include: {
      book: true,
      member: true,
    },
  });
  const today = new Date();
  const overDue: string[] = [];
  loans.map((loan) => {
    if (loan.dueDate < today && loan.status === "ACTIVE") {
      overDue.push(loan.id);
    }
  });

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

  // const result = await prisma.$transaction(async (tx) => {
  //   console.log("Starting transaction...");

  //   await tx.bookloan.updateMany({
  //     where: { id: fromAccountId },
  //   });
  // })

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

export async function UpdateBookLoan(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }
}
