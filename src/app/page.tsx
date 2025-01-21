import BooksList from "@/components/BookList";
import { getBooks } from "./actions/book";
import BookForm from "@/components/BookForm";
import { BookDialog } from "@/components/BookDialog";


export default async function Page() {
  const books = await getBooks();
  return (
    <main>
      <div>
        <BookDialog />
      </div>
      <div>
        <BookForm />
      </div>
      <BooksList 
      data={books} 
      />
    </main>
  )
}