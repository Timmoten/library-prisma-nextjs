"use client";

import { book, member } from "@prisma/client";
import { BookDialog } from "./book-dialog";
import { LoanDialog } from "./book-loan-dialog";
import { MemberDialog } from "./member-dialog";


export default function NavBar(data: {books: book[], members: member[]}) {
    return (
      <header className="bg-primary sticky top-0">
        <div className="flex justify-between py-4 container mx-auto">
          <div>
            <h1 className="text-primary-foreground text-2xl font-bold">The Library</h1>
          </div>
            <div className="flex gap-2">

            <BookDialog />

            <MemberDialog />
  
            <LoanDialog members={data.members} books={data.books} />
              
            </div>
        </div>
      </header>
    );
}