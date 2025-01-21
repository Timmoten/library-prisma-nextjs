"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getMembers() {
    return await prisma.member.findMany();
}

const formSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(2, {message: "Name needs to be longer"}),
    email: z.string().email({message: "Needs to be a valid email address"}),
    phone: z.string().optional(),
})

export async function CreateMember(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
        if (!result.success) {
          console.log(result.error.flatten());
          return result.error.flatten();
        }
    
        const member = await prisma.member.create({
          data: {
            name: result.data.name,
            email: result.data.email,
            phone: result.data.phone,
          },
        });
        revalidatePath("/");
        console.log(member.name);
        console.log(result.data);
}

export async function UpdateMember(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }

    const member = await prisma.member.update({
        where: {
            id: result.data.id,
        },
        data: {
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
        },
      });
      revalidatePath("/");
      console.log(member.name);
      console.log(result.data);
}