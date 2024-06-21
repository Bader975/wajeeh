import { prismaDb } from "@/db";
import Image from "next/image";

export default async function Home() {
  const users = await prismaDb.user.findMany({});

  return (
    <main className="flex">
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}
