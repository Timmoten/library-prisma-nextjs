"use client";

import { book } from "@prisma/client";

export default function Book({ data }: {data: book}) {
    return (
        <div>
            <p>{data.title}</p>
            <p>add books here</p>
        </div>
    );
}