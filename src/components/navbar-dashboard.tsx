"use client";

import { Button } from "./ui/button";
import { redirect } from "next/navigation";


export default function NavBarDashboard() {
    return (
      <header className="bg-primary sticky top-0">
        <div className="flex justify-between py-4 container mx-auto">
          <div className="flex">
            <h1 className="flex text-primary-foreground text-2xl font-bold">The Library - Dashboard</h1>
          </div>
            <div className="flex gap-2">

            <Button className="border-2" onClick={() => redirect("/books")}>
                Books
            </Button>
            <Button className="border-2" onClick={() => redirect("/members")}>
                Members
            </Button>
            <Button className="border-2" onClick={() => redirect("/loans")}>
                Loans
            </Button>            
            </div>
        </div>
      </header>
    );
}