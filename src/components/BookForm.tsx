"use client";

import { CreateBook } from "@/app/actions/book";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function BookForm() {
  const [state, action, isPending] = useActionState(CreateBook, null);
  return (
    <form action={action} className="flex flex-col gap-2">
      <h1 className="text-center">Add a new book</h1>
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

        <div className="flex flex-col container p-2">
          <div className="flex justify-between items-end mx-auto">
            <div className="flex my-auto">
              <p>Title:</p>
            </div>
            <div className="flex">
              <Input
                name="title"
                type="text"
                placeholder="Book Title"
                className="border-2 border-black rounded-md m-2"
              />
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
          <div className="flex justify-between items-end mx-auto">
            <div className="flex my-auto">
              <p>Author:</p>
            </div>
            <div className="flex">
              <Input
                name="author"
                type="text"
                placeholder="Author Name"
                className="border-2 border-black rounded-md m-2"
              />
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
              <p>Published Year:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="published"
                type="text"
                placeholder="Published Year"
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

        <div className="flex container p-2 flex-col">
          <div className="flex flex-row justify-between items-end mx-auto">
            <div className="flex my-auto">
              <p>ISBN:</p>
            </div>
            <div className="flex">
              <Input
                name="isbn"
                type="text"
                placeholder="ISBN-13 Format"
                className="border-2 border-black rounded-md m-2"
              />
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