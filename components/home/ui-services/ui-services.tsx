  import React from "react";
  import Image from "next/image";
  import { servicesData } from "@/data/data";
  export default function UiServices() {
    return (
      <section className="mt-32 mx-auto max-w-screen-lg" id="ui-services">
        <h1 className="text-center text-[#0F2837] text-3xl font-bold">
          خدمات <span className="text-[#00AC9D]"> وجيه</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mx-auto">
          {servicesData.map((ser: any) => (
            <div className="w-[224px] text-center" key={ser.text}>
              <Image
                src={`/images/${ser.imgUrl}`}
                alt="wajeeh man"
                width={224}
                height={224}
                className="mx-auto"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  direction:"rtl"
                }}
              />
              <h2 className="text-[#15264C] text-2xl mt-4 font-bold">
                {ser.text}
              </h2>
            </div>
          ))}
        </div>
      </section>
    );
  }
