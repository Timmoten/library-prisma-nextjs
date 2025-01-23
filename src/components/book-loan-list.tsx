"use client";

import { book, bookLoan, member } from "@prisma/client";
import BookLoanCard from "./book-loan-card";

export default function BookLoanList({ data }: { data: {loan: bookLoan, member: member, book: book}[] }) {
    return (
        <div className="Flex container gap-2 border-black border-2 m-2 p-2">
            {data.map((bookLoan) => (
                <BookLoanCard 
                key={bookLoan.loan.id}
                data={bookLoan}
                />
            ))}
        </div>
    )
}