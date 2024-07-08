import React from "react";
import classes from "./banner.module.css";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Banner() {
  return (
    <section className={classes["hero-section"]}>
      <div className="flex  flex-col md:flex-row justify-around items-center my-28">
        <Image
          src={"/images/wajeeh-man.png"}
          alt="wajeeh man"
          width={440}
          height={560}
          className="w-[220px] md:w-[440px]"
        />
        <h2 className="text-center font-bold  text-xl md:text-4xl  leading-[1.5rem] md:leading-[4.5rem] text-white w-auto md:w-[340px]">
          المساعد الافتراضي الأول في عالم التعليم بالتكامل مع مسارات التعلم
          المرن
        </h2>
      </div>
      <div className="text-center md:mr-40">
        <button type="button" className={classes["bnt-start-now"]}>
        
          ابـدأ رحلتك الآن
          <FaArrowLeftLong  style={{
            display:"inline",
            marginRight:"1rem",
        }}/>

        </button>
      </div>
    </section>
  );
}
