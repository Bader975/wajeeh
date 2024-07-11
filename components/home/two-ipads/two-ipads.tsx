import React from "react";
import Image from "next/image";

export default function TwoIpads() {
  return (
<section className="relative flex flex-col items-center justify-center bg-[url('/images/vr-bg.png')] bg-no-repeat bg-cover h-[1200px] my-30 md:my-20 sm:my-10 w-full bg-center sm:bg-bottom md:bg-center lg:bg-top">
<Image
        src={"/images/two-ipads.png"}
        alt="two-ipads"
        width={600}
        height={700}
        className="md:w-full max-w-[600px] w-[300px]  md:h-auto object-cover relative z-10"
      />
      <h2 className="text-center font-bold text-lg md:text-4xl leading-snug text-white w-full max-w-[340px] mt-4">
        لوحة تحكم تخصصية مدعومة محدثة بتقنيــات الذكاء الصناعي والتحليل
      </h2>
    </section>
  );
}
