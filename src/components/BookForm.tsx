"use client";

import { CreateBook, UpdateBook } from "@/app/actions/book";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { book } from "@prisma/client";
//import { Label } from "./ui/label";

// interface BookCheck {
//     book?: book;
// }

export default function BookForm({ data }: {data?: book}) {
    
    const [state, action, isPending] = useActionState((!data? CreateBook : UpdateBook), null);
    
    //const [state, action, isPending] = useActionState(UpdateBook, null);
    
  
  return (
    <form action={action} className="flex flex-col gap-2">
      <h1 className="text-center">{data? "Edit book" : "Add a new book"}</h1>
      <div className="flex container flex-col content-center justify-center mx-auto">
        {/* <div className="flex">
          <div id="text-field">
            <div className="flex"><p>Title:</p></div>
            <div className="flex"><p>Author:</p></div>
            <div className="flex"><p>Published Year:</p></div>
            <div className="flex"><p>ISBN:</p></div>
          </div>
          <div id="input-fields" className="container">
            <div className="flex"><input
              name="title"
              type="text"
              className="flex border-2 border-black rounded-md m-2"
            /></div>
            <div className="flex"><input
              name="author"
              type="text"
              className="flex border-2 border-black rounded-md m-2"
            /></div>
            <div className="flex"><input
              name="published"
              type="date"
              className="flex border-2 border-black rounded-md m-2"
            /></div>
            <div className="flex"><input
              name="isbn"
              type="text"
              className="flex border-2 border-black rounded-md m-2"
            /></div>

          </div>
        </div> */}

        {data ? (
          <div className="flex flex-col container p-2">
            <div className="flex">
              <div className="flex my-auto container justify-end">
                <p>ID:</p>
              </div>
              <div className="flex min-w-64">
                <Input
                  name="id"
                  type="text"
                  value={data.id}
                  readOnly={true}
                  className="border-2 border-black rounded-md m-2"
                />
              </div>

              <div className="flex container">
                <p></p>
              </div>
            </div>
          
          </div>
        ) : (
          <p></p>
        )}

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Title:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="title"
                type="text"
                defaultValue={data? data.title : ""}
                placeholder="Book Title"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.title && (
              <p className="text-red-500">
                {state.fieldErrors.title.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Author:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="author"
                type="text"
                defaultValue={data? data.author : ""}
                placeholder="Author Name"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.author && (
              <p className="text-red-500">
                {state.fieldErrors.author.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Published:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="published"
                type={data? "text" : "date"}
                defaultValue={data? `${data.published.getFullYear()}-${((data.published.getMonth()+1)<10)? '0'+(data.published.getMonth()+1) : (data.published.getMonth()+1)}-${(data.published.getDate() < 10)? '0'+ data.published.getDate() : data.published.getDate()}` : ""}
                //defaultValue={data? data.published.toLocaleDateString() : ""}
                //placeholder="dd/mm/yyyy"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.published && (
              <p className="text-red-500">
                {state.fieldErrors.published.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>ISBN:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="isbn"
                type="text"
                defaultValue={data? data.isbn : ""}
                placeholder="ISBN-13 Format"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.isbn && (
              <p className="text-red-500">
                {state.fieldErrors.isbn.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex content-center justify-center">
          <Button disabled={isPending} className="border-2 w-72">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}