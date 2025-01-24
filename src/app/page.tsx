import BookList from "@/components/book-list";
import { getBooks } from "./actions/book";
import { getMembers } from "./actions/member";
import MemberList from "@/components/member-list";
import { getBookLoans } from "./actions/bookloan";
import BookLoanList from "@/components/book-loan-list";
//import BookLoanForm from "@/components/book-loan-form";
import { ComboboxForm } from "@/components/test-form";


export default async function Page() {
  const books = await getBooks();
  const members = await getMembers();
  const loans = await getBookLoans();
  return (
    <main>
      <div>
        <ComboboxForm />
      </div>
      <div>
        <h1>Loans</h1>
        <BookLoanList data={loans}
        />
      </div>
      <div>
        <h1>Books</h1>
        <BookList data={books} />
      </div>
      <div>
        <h1>Members</h1>
        <MemberList data={members} />
      </div>
    </main>
  );
}