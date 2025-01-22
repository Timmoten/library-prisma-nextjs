"use client";

import { BookDialog } from "./BookDialog";
import { MemberDialog } from "./MemberDialog";

export default function NavBar() {

    return (
      <header className="bg-primary">
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