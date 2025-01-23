"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { member } from "@prisma/client";
import { PenBox } from "lucide-react";
import MemberForm from "./member-form";

export function MemberDialog({ data }: {data?: member}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-2" >{!data ? "Add Member" : <PenBox /> }</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle></DialogTitle>
        </DialogHeader>
        {data? <MemberForm data={data} /> : <MemberForm /> }
      </DialogContent>
    </Dialog>
  )
}
