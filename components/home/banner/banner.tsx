"use client";
import React, { useEffect } from "react";
import classes from "./banner.module.css";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Banner() {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      imageControls.start({ x: 0, opacity: 1 });
      textControls.start({ x: 0, opacity: 1 });
    } else {
      imageControls.start({ x: "100vw", opacity: 0 });
      textControls.start({ x: "-100vw", opacity: 0 });
    }
  }, [inView, imageControls, textControls]);

  return (
    <section className={classes["hero-section"]}>
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-around items-center my-28 overflow-hidden"
      >
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={imageControls}
          transition={{ type: "spring", stiffness: 50, duration: 2 }}
        >
          <Image
            src={"/images/wajeeh-man.png"}
            alt="wajeeh man"
            width={440}
            height={560}
            className="w-[220px] md:w-[440px]"
          />
        </motion.div>
        <motion.h2
          initial={{ x: "-100vw", opacity: 0 }}
          animate={textControls}
          transition={{ type: "spring", stiffness: 50, duration: 2 }}
          className="text-center mt-[70px] font-bold text-xl md:text-4xl leading-[2.5rem] md:leading-[3.5rem] text-white w-auto max-w-[340px]"
        >
          المساعد الافتراضي الأول في عالم التعليم بالتكامل مع مسارات التعلم
          المرن
        </motion.h2>
      </div>
      <div className="text-center md:mr-40">
        <Link href={"/chat"}>
          <button type="button" className={classes["bnt-start-now"]}>
            ابـدأ رحلتك الآن
            <FaArrowLeftLong
              style={{
                display: "inline",
                marginRight: "1rem",
              }}
            />
          </button>
        </Link>
      </div>
    </section>
  );
}
