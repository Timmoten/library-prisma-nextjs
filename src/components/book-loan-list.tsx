"use client";

import { BookLoan } from "@/types/bookloan";
import BookLoanCard from "./book-loan-card";

// interface item {
//     book: book;
//     member: member;
// }

// interface BookLoanProps {
//     loans: bookloan[];
//     items: {
//         [key: string]: item
//     }
// };

// export default function BookLoanList({ data }: { data: { loan: bookloan , }[] }) {

// export default function BookLoanList({
//     loans,
//     book,
//     member,
// }:BookLoanProps) {

//type Data = Awaited<ReturnType<typeof getBookLoans>>;

export default function BookLoanList({ data }: { data: BookLoan }) {
    return (
        <div className="Flex container gap-2 border-black border-2 m-2 p-2">
            {data.map((loan) => (
                <BookLoanCard 
                key={loan.id}
                loan={loan}
                book={loan.book}
                member={loan.member}
                />
            ))}
        </div>
    )
}