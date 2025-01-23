import { getBookLoans } from "@/app/actions/bookloan";

export type BookLoan = Awaited<ReturnType<typeof getBookLoans>>;