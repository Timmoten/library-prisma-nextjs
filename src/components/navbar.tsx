"use client";

import { BookDialog } from "./book-dialog";
import { MemberDialog } from "./member-dialog";

export default function NavBar() {

    return (
      <header className="bg-primary sticky top-0">
        <div className="flex justify-between py-4 container mx-auto">
          <div>
            <h1 className="text-primary-foreground text-2xl font-bold">The Library</h1>
          </div>
            <div className="flex gap-2">

            <BookDialog />

            <MemberDialog />
  
            
              
            </div>
        </div>
      </header>
    );
}