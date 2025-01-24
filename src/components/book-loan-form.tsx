"use client";

import { useActionState } from "react";
//import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
// } from "./ui/command";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "./ui/popover"
// import {
//     Drawer,
//     DrawerContent,
//     DrawerTrigger,
//   } from "@/components/ui/drawer";
import { book } from "@prisma/client";
//import { useMediaQuery } from "@/hooks/use-media-query"
import { CreateBookLoan, UpdateBookLoan } from "@/app/actions/bookloan";

// type Status = {
//   value: string;
//   label: string;
// };

// const statuses: Status[] = [
//   {
//     value: "backlog",
//     label: "Backlog",
//   },
//   {
//     value: "todo",
//     label: "Todo",
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//   },
//   {
//     value: "done",
//     label: "Done",
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//   },
// ];
//import { Label } from "./ui/label";

// interface BookCheck {
//     book?: book;
// }

export default function BookLoanForm({ data }: {data?: book}) {
    // const [open, setOpen] = useState(false);
    // const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, action, isPending] = useActionState((!data? CreateBookLoan : UpdateBookLoan), null);
    
    //const [state, action, isPending] = useActionState(UpdateBook, null);
    
  
  return (
    <form action={action} className="flex flex-col gap-2">
      <h1 className="text-center">{data? "Edit loan" : "Add a new loan"}</h1>
      <div className="flex container flex-col content-center justify-center mx-auto">
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

 {/* <div className="flex items-center space-x-4"> 
      <p className="text-sm text-muted-foreground">Status</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
        <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          null
                      )
                      setOpen(false)
                    }}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>  */}

        {/* <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover> */}

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
            {/* {state?.fieldErrors.title && (
              <p className="text-red-500">
                {state.fieldErrors.title.join(", ")}
              </p>
            )} */}
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
            {/* {state?.fieldErrors.author && (
              <p className="text-red-500">
                {state.fieldErrors.author.join(", ")}
              </p>
            )} */}
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
            {/* {state?.fieldErrors.published && (
              <p className="text-red-500">
                {state.fieldErrors.published.join(", ")}
              </p>
            )} */}
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
            {/* {state?.fieldErrors.isbn && (
              <p className="text-red-500">
                {state.fieldErrors.isbn.join(", ")}
              </p>
            )} */}
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

// function StatusList({
//     setOpen,
//     setSelectedStatus,
//   }: {
//     setOpen: (open: boolean) => void
//     setSelectedStatus: (status: Status | null) => void
//   }) {
//     return (
//       <Command>
//         <CommandInput placeholder="Filter status..." />
//         <CommandList>
//           <CommandEmpty>No results found.</CommandEmpty>
//           <CommandGroup>
//             {statuses.map((status) => (
//               <CommandItem
//                 key={status.value}
//                 value={status.value}
//                 onSelect={(value) => {
//                   setSelectedStatus(
//                     statuses.find((priority) => priority.value === value) || null
//                   )
//                   setOpen(false)
//                 }}
//               >
//                 {status.label}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </CommandList>
//       </Command>
//     )
//   }