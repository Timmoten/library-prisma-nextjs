"use client";

import { book } from "@prisma/client";
import { BookDialog } from "./book-dialog";
import { Button } from "./ui/button";
import { DeleteBook } from "@/app/actions/book";
import { Trash2 } from "lucide-react";

export default function BookCard({ data }: { data: book }) {
  return (
    <div
      key={data.id}
      className="flex container border-2 border-black rounded-md mx-auto m-1 gap-2"
    >
      <div className="flex flex-col px-3">
        <p>Title: {data.title}</p>
        <p>Author: {data.author}</p>
        <p>Published: {data.published.toDateString()}</p>
        <p>ISBN: {data.isbn}</p>
        <p>Book added to library: {data.createdAt.toDateString()}</p>
      </div>
      <div className="flex my-auto">
        <BookDialog data={data} />
      </div>
      <div className="flex my-auto">
        <Button variant={"destructive"} onClick={() => DeleteBook(data.id)}>
        <Trash2 />
        </Button>
      </div>
    </div>
  );
}