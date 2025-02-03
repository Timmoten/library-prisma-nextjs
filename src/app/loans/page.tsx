import BookLoanList from "@/components/book-loan-list";
import { getBookLoans } from "../actions/bookloan";
import NavBarLoans from "@/components/navbar-loans";
import { getMembers } from "../actions/member";
import { getBooks } from "../actions/book";


export default async function Page() {
  const loans = await getBookLoans();
  const books = await getBooks();
  const members = await getMembers();

  return (
    <main>
      <NavBarLoans books={books} members={members} />
      <div className="flex flex-row justify-evenly">
        <div>
          <h1>Loans</h1>
          <BookLoanList data={loans} />
        </div>
      </div>
    </main>
  );
}