"use client";
import Chat from "@/components/Chat";
import { prismaDb } from "@/db";
import Image from "next/image";

export default  function Home() {
  // const users = await prismaDb.user.findMany({});
 

  async function chatGpt() {
   
  
}
  return (
    <main className="flex">
      {/* {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))} */}

<Chat/>

    </main>
  );
}
