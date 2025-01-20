"use client";

import { book } from "@prisma/client";

export default function BookCard({ data }: { data: book }) {
  return (
    <div key={data.id} className="flex container flex-col border-2 border-black rounded-md mx-auto m-1">
      <p>Title: {data.title}</p>
      <p>Author: {data.author}</p>
      <p>Published: {data.published.toDateString()}</p>
      <p>ISBN: {data.isbn}</p>
      <p>Book added to library: {data.createdAt.toDateString()}</p>
    </div>
  );
}