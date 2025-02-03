import BookList from "@/components/book-list";
import { getBooks } from "../actions/book";
import NavBarBooks from "@/components/navbar-book";



export default async function Page() {
  const books = await getBooks();
  return (

    <main>
      <NavBarBooks  />
      <div>
        <h1>Books</h1>
        <BookList data={books} />
      </div>
    </main>
  );
}