// import BookList from "@/components/book-list";
// import { getBooks } from "./actions/book";
// import { getMembers } from "./actions/member";
// import MemberList from "@/components/member-list";
// import { getBookLoans } from "./actions/bookloan";
// import BookLoanList from "@/components/book-loan-list";
//import BookLoanForm from "@/components/book-loan-form";
//import { ComboboxForm } from "@/components/test-form";
//import BookLoanForm from "@/components/book-loan-form";
//import NavBar from "@/components/navbar";
import { redirect } from "next/navigation";



export default async function Page() {
  
  redirect('/dashboard')

  // if(true)
  // {
  //   redirect('/dashboard')
  // }

  //redirect("/")
  // const books = await getBooks();
  // const members = await getMembers();
  // const loans = await getBookLoans();
  // return (

  //   <main>
  //     <NavBar books={books} members={members} />
  //     <div>
  //       <h1>Loans</h1>
  //       <BookLoanList data={loans}
  //       />
  //     </div>
  //     <div>
  //       <h1>Books</h1>
  //       <BookList data={books} />
  //     </div>
  //     <div>
  //       <h1>Members</h1>
  //       <MemberList data={members} />
  //     </div>
  //   </main>
  // );
}