"use client";

import { member } from "@prisma/client";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { MemberDialog } from "./member-dialog";
import { DeleteMember } from "@/app/actions/member";

export default function MemberCard({ data }: { data: member }) {
  return (
    <div
      key={data.id}
      className="flex container border-2 border-black rounded-md mx-auto m-1 gap-2"
    >
      <div className="flex flex-col px-3">
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Member added to library: {data.createdAt.toDateString()}</p>
      </div>
      <div className="flex my-auto">
        <MemberDialog data={data} />
      </div>
      <div className="flex my-auto">
        <Button variant={"destructive"} onClick={() => DeleteMember(data.id)}>
        <Trash2 />
        </Button>
      </div>
    </div>
  );
}