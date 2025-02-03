"use client";

import { BookDialog } from "./book-dialog";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";


export default function NavBarBooks() {
    return (
      <header className="bg-primary sticky top-0">
        <div className="flex justify-between py-4 container mx-auto">
          <div>
            <h1 onClick={() => redirect("/dashboard")} className="text-primary-foreground text-2xl font-bold">The Library - Books</h1>
          </div>
            <div className="flex gap-2">
            <Button className="border-2" onClick={() => redirect("/dashboard")}>
                Return to Dashboard
            </Button>
            <BookDialog />
              
            </div>
        </div>
      </header>
    );
}