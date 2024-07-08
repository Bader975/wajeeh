import { whyWajeeh } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function WhyWajeeh() {
  return (
    <section className="mt-32 mx-auto max-w-screen-lg">
      <h1 className="text-center text-[#0F2837] text-3xl font-bold">
        لمــاذا وجيه؟
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-10 mx-auto">
      {whyWajeeh.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={`/images/${img}`}
              alt={`Image ${index + 1}`}
              width={280}
              height={128}
              style={{
                direction:"ltr"
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
