"use client";

import { book, bookloan, member } from "@prisma/client";
import { Button } from "./ui/button";
import { CalendarPlus2, Trash2, Undo2 } from "lucide-react";
import { DeleteBookLoan, ExtendBookLoan, ReturnBookLoan } from "@/app/actions/bookloan";
// import { BookDialog } from "./book-dialog";
// import { Button } from "./ui/button";
// import { DeleteBook } from "@/app/actions/book";
// import { Trash2 } from "lucide-react";



export default function BookLoanCard( data : { loan: bookloan , member: member, book: book }) {
  return (
    <div
      key={data.loan.id}
      className="flex container border-2 border-black rounded-md mx-auto m-1 gap-2"
    >
      <div className="flex flex-col px-3">
        <p>Loaner: {data.member.name}</p>
        <p>Book: {data.book.title}</p>
        <p>Loaned: {data.loan.loanDate.toDateString()}</p>
        <p>Status: {data.loan.status}</p>
        <p>Due date: {data.loan.dueDate.toDateString()}</p>
        {data.loan.status==="RETURNED" && <p>Book returned on: {data.loan.returnDate?.toDateString()}</p>}
      </div>
      <div className="flex my-auto">
      <Button variant={"default"} onClick={() => ExtendBookLoan(data.loan)}>
        <CalendarPlus2 />
        </Button>
      </div>
      <div className="flex my-auto">
      <Button variant={"default"} onClick={() => ReturnBookLoan(data.loan)}>
        <Undo2 />
        </Button>
      </div>
      <div className="flex my-auto">
       <Button variant={"destructive"} onClick={() => DeleteBookLoan(data.loan.id)}>
        <Trash2 />
        </Button>
      </div>
    </div>
  );
}

// model bookLoan {
//     id String @id @default(cuid())
//     bookId String
//     memberId String
//     loanDate DateTime @db.Timestamptz(0)
//     dueDate DateTime @db.Timestamptz(0)
//     returnDate DateTime? @db.Timestamptz(0)
//     status Status
//     createdAt DateTime @default(now()) @db.Timestamptz(0)
//     updatedAt DateTime @updatedAt @db.Timestamptz(0)
//     book book @relation(fields: [bookId], references: [id])
//     member member @relation(fields: [memberId], references: [id])
//     @@index([bookId, memberId])
//   }