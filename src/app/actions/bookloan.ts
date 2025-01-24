"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
//import { revalidatePath } from "next/cache";

export async function getBookLoans() {
    return await prisma.bookloan.findMany({
        include: {
            book: true,
            member: true,
        }
    });
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
    status: z.enum(["ACTIVE", "RETURNED", "OVERDUE"]),
    returnDate: z.string().date().optional(),
  });

export async function CreateBookLoan(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }


}

export async function UpdateBookLoan(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }
}
