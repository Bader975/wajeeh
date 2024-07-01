"use client";
import Chat from "@/components/Chat";
// import { Microphone } from "@/components/Microphone";
import { prismaDb } from "@/db";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center bg-slate-400 min-h-screen">
      <Chat />
    </main>
  );
}
