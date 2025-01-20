import BooksList from "@/components/BookList";
import { getBooks } from "./actions/book";
import BookForm from "@/components/BookForm";


export default async function Page() {
  const books = await getBooks();
  return (
    <main>
      <div>
        <BookForm />
      </div>
      <BooksList 
      data={books} 
      />
    </main>
  )
}