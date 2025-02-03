import BookList from "@/components/book-list";
import MemberList from "@/components/member-list";
import BookLoanList from "@/components/book-loan-list";
import { getBooks } from "../actions/book";
import { getMembers } from "../actions/member";
import { getBookLoans } from "../actions/bookloan";
import NavBarDashboard from "@/components/navbar-dashboard";



export default async function Page() {
  const books = await getBooks();
  const members = await getMembers();
  const loans = await getBookLoans();
  return (
    <main>
      <NavBarDashboard />
      <div className="flex flex-row justify-evenly">
        <div>
          <h1>Loans</h1>
          <BookLoanList data={loans} />
        </div>
        <div>
          <h1>Books</h1>
          <BookList data={books} />
        </div>
        <div>
          <h1>Members</h1>
          <MemberList data={members} />
        </div>
      </div>
    </main>
  );
}