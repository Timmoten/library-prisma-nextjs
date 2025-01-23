"use client";

import { member } from "@prisma/client";
import MemberCard from "./member-card";

export default function MemberList({ data }: { data: member[] }) {
    return (
        <div className="Flex container gap-2 border-black border-2 m-2 p-2">
            {data.map((member) => (
                <MemberCard 
                key={member.id}
                data={member}
                />
            ))}
        </div>
    )
}