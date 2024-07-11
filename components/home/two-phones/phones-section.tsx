"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PhonesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Make sure the observer triggers every time
    threshold: 0.1, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: '-50%', opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <>
      <section className="mt-32 mx-4 md:mx-20 flex flex-col">
        <Image
          src={"/images/saudi-old-style.png"}
          alt="old style saudi"
          width={1102}
          height={107}
          style={{
            objectFit: "contain",
            position: "relative",
            zIndex: -1,
          }}
        />

        <div className="flex my-4 mx-3 flex-col-reverse md:flex-row justify-between" id="about">
          <div className="flex flex-col gap-4 flex-wrap">
            <Image
              src={"/images/wajeeh-logo.svg"}
              alt="old style saudi"
              width={108}
              height={76}
            />

            <div className="flex justify-between gap-4 my-20" >
              <div className="bg-[#00AC9D] rounded-lg w-[12px] h-[112px]"></div>
              <h2 className="h-[191px] text-right font-semibold text-xl md:text-2xl leading-8 text-blue-dark">
                لخلق بيئة رقمية آمنة ذات جودة تعليم مميزة لسـد فجوة التعلم
                النظـــري ومتطلبات السـوق من خـــلال تقـنيــات الذكاء الاصطناعي
                والواقع الافتراضي
              </h2>
            </div>
          </div>

          <motion.div
            ref={ref}
            initial={{ y: '-50%', opacity: 0 }}
            animate={controls}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
          >
            <Image
              className="w-[380px] h-[380px] md:h-[550px] md:w-[580px]"
              src={"/images/two-phones.png"}
              alt="old style saudi"
              width={580}
              height={580}
              style={{
                marginTop: "10px",
                objectFit: "contain",
                transform: "translateY(-10.1rem)",
                width: "100%",
              }}
            />
          </motion.div>
        </div>
      </section>

      <div className="relative flex flex-row-reverse">
        <Image
          src={"/images/side-logo.svg"}
          alt="old style saudi"
          width={107}
          height={107}
          className="w-[50px] md:w-[107px]"
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
            height: "auto",
            position: "relative",
            zIndex: -1,
          }}
        />
      </div>
    </>
  );
}
