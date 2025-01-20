"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
//import { revalidatePath } from "next/cache";

const formSchema = z.object({
    title: z.string().min(3, {message: "Book needs a longer title"}),
    author: z.string().min(3, {message: "Author needs a longer name"}),
    published: z.string().date(),
    isbn: z.string().min(13, {message: "ISBN must be 13 characters long"}).max(13, {message: "ISBN must be 13 characters long"}),
})

export async function getBooks() {
    return await prisma.book.findMany();
}

export async function CreateBook(previousState: unknown, formData: FormData) {
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }

    const book = await prisma.book.create({
      data: {
        title: result.data.title,
        author: result.data.author,
        published: result.data.published,
        isbn: result.data.isbn,
      },
    });
    revalidatePath("/");
    console.log(book.title);
    console.log(result.data);
    // return {
    //   id: book.title,
    //   success: true,
    //   message: "Book added successfully",
    // };
    
    // try {
    //     const book = await prisma.book.create({
    //         data: {
    //             title: result.data.title,
    //             author: result.data.author,
    //             published: result.data.published,
    //             isbn: result.data.isbn,
    //         }
    //     })
    //     revalidatePath("/");
    //     return {
    //         id: book.title,
    //         success: true,
    //         message: "Book added successfully",
    //     }
    // } catch(error) {
    //     console.log(error);
    //     return error;
    // }
}