"use client";

import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CreateMember, UpdateMember } from "@/app/actions/member";
import { member } from "@prisma/client";
//import { Label } from "./ui/label";

// interface BookCheck {
//     book?: book;
// }

export default function MemberForm({ data }: {data?: member}) {
    
    const [state, action, isPending] = useActionState((!data? CreateMember : UpdateMember), null);
    
    //const [state, action, isPending] = useActionState(UpdateBook, null);
    
  
  return (
    <form action={action} className="flex flex-col gap-2">
      <h1 className="text-center">{data? "Edit member" : "Add a new member"}</h1>
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

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Name:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="name"
                type="text"
                defaultValue={data? data.name : ""}
                placeholder="Name Here"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.name && (
              <p className="text-red-500">
                {state.fieldErrors.name.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Email:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="email"
                type="email"
                defaultValue={data? data.email : ""}
                placeholder="email@provider.com"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.email && (
              <p className="text-red-500">
                {state.fieldErrors.email.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col container p-2">
          <div className="flex">
            <div className="flex my-auto container justify-end">
              <p>Phone:</p>
            </div>
            <div className="flex min-w-52">
              <Input
                name="phone"
                type="text"
                defaultValue={data?.phone? data.phone : ""}
                placeholder="Optional 0701234567"
                className="border-2 border-black rounded-md m-2"
              />
            </div>

            <div className="flex container">
              <p></p>
            </div>
          </div>
          <div className="flex justify-center">
            {state?.fieldErrors.phone && (
              <p className="text-red-500">
                {state.fieldErrors.phone.join(", ")}
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