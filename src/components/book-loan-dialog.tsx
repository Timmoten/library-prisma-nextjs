"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { book, bookloan, member } from "@prisma/client";
import { PenBox } from "lucide-react";
//import MemberForm from "./member-form";
import BookLoanForm from "./book-loan-form";

export function LoanDialog(data : {members: member[], books: book[],  loan?: bookloan}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-2" >{!data.loan ? "Add Loan" : <PenBox /> }</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle></DialogTitle>
        </DialogHeader>
        {data.loan? <BookLoanForm members={data.members} books={data.books} loan={data.loan} /> : <BookLoanForm members={data.members} books={data.books} /> }
      </DialogContent>
    </Dialog>
  )
}
