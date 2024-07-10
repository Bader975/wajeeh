"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GuideMe() {
  const [show, setShow] = useState(false);
  const dataGuideMe = [
    {
      id: "3",
      category: "تعريف بمسار علوم الحاسب",
      description:
        "مسار علوم الحاسب يركز على دراسة البرمجة، هندسة البرمجيات, الذكاء الاصطناعي، وأمن المعلومات.",
      items: ["مهندس برمجيات", "باحث في الذكاء الاصطناعي", "محلل أمن معلومات"],
    },
    {
      id: "1",
      category: "الشهادات الاحترافية",
      items: [
        "PMP (Project Management Professional)",
        "CISSP (Certified Information Systems Security Professional)",
        "CPA (Certified Public Accountant)",
        "CFA (Chartered Financial Analyst)",
        "AWS Certified Solutions Architect",
        "CompTIA A+",
        "Six Sigma Green Belt/Black Belt",
        "SHRM-CP (Society for Human Resource Management Certified Professional)",
        "Google Certified Professional Data Engineer",
        "Cisco CCNA (Cisco Certified Network Associate)",
      ],
    },
    {
      id: "2",
      category: "أسماء مؤثرين في علوم الحاسب",
      items: [
        "@malsubaie21",
        "@hknl55",
        "@FN_Alshehrii",
        "@qahtanlLayan",
        "@lx25li",
        "@Mahja_CS",
        "@sekaash",
        "@iYaraAl",
        "@iMFahadS_",
      ],
    },
  ];

  useEffect(() => {
    // setTimeout(() => setShow(true), 1000);
  }, [show]);

  return (
    <div className="flex flex-col justify-center">
      <div className="chat-container">
        <div className="scroll-area">
          {show &&
            dataGuideMe.map((data: any, index) => (
              <motion.div
                key={data.id}
                className="flex justify-start flex-row-reverse items-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.5 }}
              >
                <Image
                  src="/images/wajeeh-man-icon.png"
                  alt=""
                  width={40}
                  height={40}
                  className="self-strat"
                />
                <div
                  className=" w-[80%] my-6 text-white p-3 self-end"
                  style={{
                    borderRadius: "20px",
                    background:
                      index % 2 == 0
                        ? "transparent linear-gradient(95deg, #01454F 0%, #13574F 18%, #35764F 43%, #51914F 61%, #6FAD4F 84%, #94CC52 100%) 0% 0% no-repeat padding-box"
                        : "transparent linear-gradient(94deg, #2A9C89 0%, #60AE65 55%, #7FC042 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <p className="font-bold text-xl mb-2 text-right">
                    {data.category}
                  </p>
                  {data.description && (
                    <p className="mb-2">{data.description}</p>
                  )}
                  <ul className="list-none list-inside">
                    {data.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex}>
                        {itemIndex + 1}- {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <motion.button
        onClick={() => setShow(true)}
        style={{
          background:
            "transparent linear-gradient(94deg, #2A9C89 0%, #60AE65 55%, #7FC042 100%) 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          fontSize: "24px",
          borderRadius: "45px",
          width: "100%",
          maxWidth: "256px",
          height: "65px",
          color: "#ffff",
          fontWeight: "bold",
          margin: "auto",
          marginTop: "10px",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ابدا
      </motion.button>
    </div>
  );
}
