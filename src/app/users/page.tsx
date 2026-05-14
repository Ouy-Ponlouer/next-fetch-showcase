import { UserDataTable } from "@/components/UserDataTable";
import { UserResponse } from "@/types/user";

async function getUsers(): Promise<UserResponse> {
  const res = await fetch("https://dummyjson.com/users?limit=0"); // limit=0 returns all users
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function UsersPage() {
  const data = await getUsers();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      <UserDataTable data={data.users} />
    </div>
  );
}
