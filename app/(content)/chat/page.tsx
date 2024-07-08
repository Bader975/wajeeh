import Chat from "@/components/Chat";
import Image from "next/image";
import React from "react";

export default function ChatPage() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative"
      >
        <Chat />
      </div>
    </div>
  );
}
