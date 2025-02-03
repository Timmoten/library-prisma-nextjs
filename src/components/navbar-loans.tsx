"use client";

import { book, member } from "@prisma/client";
import { LoanDialog } from "./book-loan-dialog";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";


export default function NavBarLoans(data: {books: book[], members: member[]}) {
    return (
      <header className="bg-primary sticky top-0">
        <div className="flex justify-between py-4 container mx-auto">
          <div className="flex">
            <h1 className="flex text-primary-foreground text-2xl font-bold">The Library - Dashboard</h1>
          </div>
            <div className="flex gap-2">

            <Button className="border-2" onClick={() => redirect("/dashboard")}>
                            Return to Dashboard
                        </Button>
                        <LoanDialog members={data.members} books={data.books} />           
            </div>
        </div>
      </header>
    );
}