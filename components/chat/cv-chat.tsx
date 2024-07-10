import React from "react";
import Image from "next/image";

export default function CvChat() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Image
        src="/images/cv-mian-bg.png"
        alt=""
        width={688}
        height={264}
        className="self-strat"
      />
      <button
        className="hover:bg-[#5c568c]"
        style={{
          color: "#F3F3F3",
          width: "168px",
          height: "38px",
          background: "#151327 0% 0% no-repeat padding-box",
          border: "1px solid #707070",
          borderRadius: "50px",
        }}
      >
        أنشئ سيرتك الذاتية
      </button>

      {/* CV */}

      {/* CV */}
    </div>
  );
}
