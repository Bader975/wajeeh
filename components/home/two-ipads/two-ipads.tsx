import React from "react";
import Image from "next/image";
export default function TwoIpads() {
  return (
    <section
      style={{
        marginBlock: "120px",
        background:
          "transparent url(/images/vr-bg.png) 0% 0% no-repeat padding-box",
        backgroundSize: "contain",
        width: "100%",
        height: "1200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "cover",
      }}
    >
      <Image
        src={"/images/two-ipads.png"}
        alt="two-ipads"
        width={600}
        height={700}
        className="w-[400px] md:w-[600px]"
        style={{
          objectFit: "cover",
          position: "relative",
          zIndex: 1,
        }}
      />

      <h2 className="text-center font-bold text-lg md:text-4xl leading-[4.5rem] text-white w-[340px]">
        لوحة تحكم تخصصية مدعومة محدثة بتقنيــات الذكاء الصناعي والتحليل
      </h2>
    </section>
  );
}
