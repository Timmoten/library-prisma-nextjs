"use server";

import { prisma } from "@/lib/prisma";
//import { revalidatePath } from "next/cache";

export async function getMembers() {
    return await prisma.member.findMany();
}