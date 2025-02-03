"use client";

import { MemberDialog } from "./member-dialog";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";


export default function NavBarMembers() {
    return (
      <header className="bg-primary sticky top-0">
        <div className="flex justify-between py-4 container mx-auto">
          <div>
            <h1 onClick={() => redirect("/dashboard")} className="text-primary-foreground text-2xl font-bold">The Library - Members</h1>
          </div>
            <div className="flex gap-2">
            <Button className="border-2" onClick={() => redirect("/dashboard")}>
                Return to Dashboard
            </Button>
            <MemberDialog />
              
            </div>
        </div>
      </header>
    );
}