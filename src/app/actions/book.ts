"use server";

import { prisma } from "@/lib/prisma";
//import { revalidatePath } from "next/cache";

export async function getBooks() {
    return await prisma.book.findMany();
}