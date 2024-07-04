import Image from "next/image";
import React from "react";

export default function PhonesSection() {
  return (
    <>
      <section className="mt-32 mx-4 md:mx-20 flex flex-col">
        <Image
          src={"/images/saudi-old-style.png"}
          alt="old style suadi"
          width={1102}
          height={107}
          style={{
            objectFit: "contain",
            position: "relative",
            zIndex: -1,
          }}
        />

        <div className="flex my-4 mx-3 flex-col-reverse md:flex-row justify-between">
          <div className="flex flex-col gap-4 flex-wrap">
            <Image
              src={"/images/wajeeh-logo.svg"}
              alt="old style suadi"
              width={108}
              height={76}
              style={{
               
              }}
            />

            <div className="flex justify-between gap-4 my-20">
              <div className="bg-[#00AC9D] rounded-lg w-[12px] h-[112px]"></div>
              <h2 className="h-[191px] text-right font-semibold   text-xl md:text-2xl leading-8 text-blue-dark ">
                لخلق بيئة رقمية آمنة ذات جودة تعليم مميزة لسـد فجوة التعلم
                النظـــري ومتطلبات السـوق من خـــلال تقـنيــات الذكاء الاصطناعي
                والواقع الافتراضي
              </h2>
            </div>
          </div>

           <Image
            src={"/images/two-phones.png"}
            alt="old style suadi"
            width={580}
            height={580}
            style={{
                marginTop:"10xp",
              objectFit: "contain",
            //    transform:"translateY(-10.1rem)",
               width:"100%"
            }}
          /> 
        </div>
      </section>

      <div className="relative flex flex-row-reverse">
        <Image
          src={"/images/side-logo.svg"}
          alt="old style suadi"
          width={107}
          height={107}
          style={{
            objectFit: "contain",
            position: "absolute",
            zIndex: 1,
          }}
        />

        <Image
          src={"/images/wajeeh-more-info.png"}
          alt="wajeeh-more-info"
          width={1104}
          height={380}
          style={{
            objectFit: "contain",
            width: "100%",
            position: "relative",
            zIndex: -1,
          }}
        />
      </div>
    </>
  );
}
