"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getMembers() {
    return await prisma.member.findMany();
}

export async function getMember(id: string) {
    return await prisma.member.findUnique({
        where: {
            id,
        },
    });
}

const formSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().min(2, { message: "Name needs to be longer" }),
    email: z.string().email({ message: "Needs to be a valid email address" }),
    phone: z
    .string()
    .trim()
    .min(10, 'To short to be a phone number')
    .max(14, 'To long to be a phone number')
    .optional()
    .or(z.literal(""))
    ,
  });

// phone: z
// .string()
// .trim()
// .min(10, 'To short to be a phone number')
// .max(14, 'To long to be a phone number')
// .optional()
// .or(z.literal(''))
// ,
// phone: z.string().optional(),

export async function CreateMember(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
        if (!result.success) {
          console.log(result.error.flatten());
          return result.error.flatten();
        }

        const check = await prisma.member.findFirst({
            where: {
                email: result.data.email
            }
        })
        console.log(check);
        if (check !== null) {
          return {
            fieldErrors: {
                name: [""],
                email: ["Email already exists"],
                phone: [""],
            },
          };
        }

        // try {
        //     const check = await prisma.member.findFirst({
        //             where: {
        //                 email: result.data.email
        //             }
        //         })

        //     if (!check) {
        //         throw new Error(`email already exists`);
        //     }

        //     await prisma.member.create({
        //         data: {
        //           name: result.data.name,
        //           email: result.data.email,
        //           phone: result.data.phone,
        //         },
        //       });
        //       return { success: true, message: "Member added to database" };
        // } catch (error) {
        //     return {
        //         success: false,
        //         message: `Adding member failed: ${
        //           error instanceof Error ? error.message : "Unknown error"
        //         }`,
        //       };
        // }

        const member = await prisma.member.create({
            data: {
              name: result.data.name,
              email: result.data.email,
              phone: result.data.phone,
            },
          });

        //   const member = await prisma.member.upsert({
        //     where: {
        //       email: result.data.email,
        //     },
        //     update: {

        //     },
        //     create: {
        //       name: result.data.name,
        //       email: result.data.email,
        //       phone: result.data.phone,
        //     },
        //   })

        revalidatePath("/");
        console.log(member.name);
        //console.log(result.data);
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

export async function DeleteMember(id: string) {
    await prisma.member.delete({
        where: 
        {
            id
        },
    })
    revalidatePath("/");
}

export async function getBorrowHistory(id: string) {
  const result = await prisma.member.findUnique({
    where: {
      id,
    },
    include: {
      loans: true,
    },
  });
return result?.loans;
}