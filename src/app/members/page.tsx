import { getMembers } from "../actions/member";
import MemberList from "@/components/member-list";
import NavBarMembers from "@/components/navbar-members";

export default async function Page() {
  const members = await getMembers();
  return (
    <main>
      <NavBarMembers />
      <div className="mx-auto flex justify-center">
        <div className="flex flex-col">
          <h1>Members</h1>
          <MemberList data={members} />
        </div>
      </div>
    </main>
  );
}
