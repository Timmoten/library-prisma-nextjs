"use client";

import { book } from "@prisma/client";
import BookCard from "./BookCard";

export default function BookList({ data }: { data: book[] }) {
    return (
        <div className="Flex container gap-2 border-black border-2 m-2 p-2">
            {data.map((book) => (
                <BookCard 
                key={book.id}
                data={book}
                />
            ))}
        </div>
    )
}