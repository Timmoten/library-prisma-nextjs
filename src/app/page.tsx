import BookList from "@/components/BookList";
import { getBooks } from "./actions/book";
//import BookForm from "@/components/BookForm";
//import { BookDialog } from "@/components/BookDialog";
//import MemberForm from "@/components/MemberForm";
//import { MemberDialog } from "@/components/MemberDialog";
import { getMembers } from "./actions/member";
import MemberList from "@/components/MemberList";
//import BookForm from "@/components/BookForm";


export default async function Page() {
  const books = await getBooks();
  const members = await getMembers();
  return (
    <main>
      <div>
        {/* <div>
        <BookForm />
        </div>
        <div>
        <MemberForm />
        </div> */}
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