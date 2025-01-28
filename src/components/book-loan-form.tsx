"use client";

import { useActionState, useState } from "react";
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
import { book, bookloan, member } from "@prisma/client";
//import { useMediaQuery } from "@/hooks/use-media-query"
import { CreateBookLoan, UpdateBookLoan } from "@/app/actions/bookloan";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
//import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
//import { cn } from "@/lib/utils";
//import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
//import { BookLoan } from "@/types/bookloan";

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

type Status = {
  value: string
  label: string
}

export default function BookLoanForm( data : {members: member[], books: book[],  loan?: bookloan}) {
    // const [open, setOpen] = useState(false);
    // const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  
    const [state, action, isPending] = useActionState((!data.loan? CreateBookLoan : UpdateBookLoan), null);

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [theBook, setTheBook] = useState("");
    const [theMember, setTheMember] = useState(""); 


  const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    null
  )

  const [selectedStatus2, setSelectedStatus2] = useState<Status | null>(
    null
  )
    
    //const [state, action, isPending] = useActionState(UpdateBook, null);

    const members2 = data.members.map((member) => 
      {return {label: member.name, value: member.id}}
      );

      const books2 = data.books.map((book) => {
        return { label: book.title, value: book.id };
      });
    

      // const booksWduplicates = data.books.map((book) => {
      //   return { label: book.title, value: book.id };
      // });

      // //const pos = myArray.map(e => e.hello).indexOf('stevie');

      // function removeDuplicates(data: Status[]) {
      //   const arr: Status[] = [];
      //   data.forEach((stat) => {
      //          if(arr.map(s => s.label).indexOf(stat.label) === -1)
      //          {
      //           arr.push(stat);
      //          }
      //        })
      //        console.log(arr);
      //   return arr;
      //   //data.map(stat => stat.label).indexOf('thing')
      // }

      // const books2 = removeDuplicates(booksWduplicates);

      // function removeDuplicates(data: Status[]) {
      //   let tmp: Status[] = [];
      //   data.forEach((stat, index, arr) => {
      //     if(tmp.indexOf(value) === -1)
      //   })
      //   return data.filter((value, index) => data.indexOf(value) === index);
      // }

      // const uniqueStrings: string[] = [];
      // const uniqueArray: Status[] = booksWduplicates.filter(o => {
      // const s = JSON.stringify(o);
      // if (!uniqueStrings.includes(s)) {
      //   uniqueStrings.push(s);
      //   return true;
      // }
      //  return false;
      // });

      // console.log(uniqueArray);

      // const books2 = uniqueArray;

      // const books2 = removeDuplicates(booksWduplicates);
    
  
  return (
    <form action={action} className="flex flex-col gap-2">
      <h1 className="text-center">
        {data.loan ? "Edit loan" : "Add a new loan"}
      </h1>
      <div className="flex container flex-col content-center justify-center mx-auto">
        {data.loan ? (
          <div className="flex flex-col container p-2">
            <div className="flex">
              <div className="flex my-auto container justify-end">
                <p>ID:</p>
              </div>
              <div className="flex min-w-64">
                <Input
                  name="id"
                  type="text"
                  value={data.loan.id}
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
              <p>Member:</p>
            </div>
            <div className="flex min-w-52">
              {/* <Input
                name="member"
                type="text"
                defaultValue={data.loan? data.loan.memberId : ""}
                placeholder="Member Name"
                className="border-2 border-black rounded-md m-2"
              /> */}

              <div className="flex items-center space-x-4">
                <p className="text-sm text-muted-foreground"></p>
                <Input
                  id="memberInput"
                  name="memberId"
                  type="hidden"
                  value={theMember}
                  onChange={(e) => {
                    setTheMember(e.target.value)
                  }}
                  // onChange={(e) => {
                  //   setSelectedStatus((prev) =>
                  //     prev ? { ...prev, value: e.target.value } : null
                  //   );
                  // }}
                />
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[150px] justify-start"
                    >
                      {selectedStatus ? (
                        <>{selectedStatus.label}</>
                      ) : (
                        <>+ Select Member</>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                      <CommandInput placeholder="Change member..." />
                      <CommandList>
                        <CommandEmpty>No member found.</CommandEmpty>
                        <CommandGroup>
                          {members2.map((status) => (
                            <CommandItem
                              key={status.value}
                              value={status.label}
                              onSelect={(value) => {
                                setSelectedStatus(
                                  members2.find(
                                    (priority) => priority.label === value
                                  ) || null
                                );
                                setTheMember(status.value);
                                setOpen(false);
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
              </div>

              {/* <FormField
          control={form.control}
          name="member"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Member</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? members2.find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select member"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {members2.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("member", language.value)
                            }}
                          >
                            {language.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the member that will be used in the form.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

              {/* <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? members2.find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select member"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {members2.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("member", language.value)
                            }}
                          >
                            {language.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover> */}
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.memberId && (
              <p className="text-red-500">
                {state.fieldErrors.memberId.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Book:</p>
            </div>
            <div className="flex min-w-52">
              {/* <Input
                name="book"
                type="text"
                defaultValue={data.loan? data.loan.bookId : ""}
                placeholder="Book Title"
                className="border-2 border-black rounded-md m-2"
              /> */}

              <div className="flex items-center space-x-4">
                <p className="text-sm text-muted-foreground"></p>
                <Input
                  id="bookInput"
                  name="bookId"
                  type="hidden"
                  value={theBook}
                  onChange={(e) => {
                    setTheBook(e.target.value)
                  }}
                  // value={selectedStatus2?.value}
                  // onChange={(e) => {
                  //   setSelectedStatus2((prev) =>
                  //     prev ? { ...prev, value: e.target.value } : null
                  //   );
                  // }}
                />
                <Popover open={open2} onOpenChange={setOpen2}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="min-w-[150px] justify-start"
                    >
                      {selectedStatus2 ? (
                        <>{selectedStatus2.label}</>
                      ) : (
                        <>+ Select Book</>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                      <CommandInput placeholder="Change book..." />
                      <CommandList>
                        <CommandEmpty>No book found.</CommandEmpty>
                        <CommandGroup>
                          {books2.map((status) => (
                            <CommandItem
                              key={status.value}
                              value={status.value}
                              onSelect={(value) => {
                                setSelectedStatus2(
                                  books2.find(
                                    (priority) => priority.value === value
                                  ) || null
                                );
                                setTheBook(status.value);
                                setOpen2(false);
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
              </div>
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.bookId && (
              <p className="text-red-500">
                {state.fieldErrors.bookId.join(", ")}
              </p>
            )}
          </div>
        </div>

        {/* <div className="flex flex-col container p-2">
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
            {/* {state?.fieldErrors.isbn && (
              <p className="text-red-500">
                {state.fieldErrors.isbn.join(", ")}
              </p>
            )} 
          </div>
        </div> */}

        <div className="flex content-center justify-center">
          <Button disabled={isPending} className="border-2 w-72">
            Submit
          </Button>
        </div>
      </div>
    </form>
    // </Form>
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