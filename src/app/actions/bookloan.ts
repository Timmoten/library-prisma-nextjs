"use server";

import { prisma } from "@/lib/prisma";
//import { revalidatePath } from "next/cache";

export async function getBookLoans() {
    return await prisma.bookLoan.findMany();
}