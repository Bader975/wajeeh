import React from "react";
import Image from "next/image";

export default function AdviserChat() {
  const AdvisersData = [
    {
      name: "م علي الشهراني",
      jobTitle: "مطوّر برمجيات خبير 20+ سنة",
    },
    {
      name: "م عبد الله صالح",
      jobTitle: "مهندس نظم 10+ سنوات",
    },
    {
      name: "م محمد العلي",
      jobTitle: "محلل بيانات 8+ سنوات",
    },
    {
      name: "م فهد الشمري",
      jobTitle: "مدير مشروع 12+ سنة",
    },
    {
      name: "م ناصر الدوسري",
      jobTitle: "مستشار تقنية معلومات 15+ سنة",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex justify-between items-center">
        <div
          style={{
            textAlign: "center",
            color: "#F3F3F3",
            background:
              "transparent linear-gradient(100deg, #01454F 0%, #13574F 18%, #35764F 43%, #51914F 61%, #6FAD4F 84%, #94CC52 100%) 0% 0% no-repeat padding-box",
            width: "362px",
            height: "115px",
            fontSize: "20px",
            borderRadius: "28px",
            borderBottomRightRadius: "0",
          }}
        >
          <p className="mt-2">
            يمكنك الحصول على فرصة التحدث مع مستشار , قدم الآن
          </p>
        </div>

        <Image
          src="/images/wajeeh-man.png"
          alt=""
          width={250}
          height={320}
          className="self-strat"
        />
      </div>

      {/* Cards Advisers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center flex-wrap mt-8">
        {AdvisersData.map((adv: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center gap-6 hover:shadow-2xl"
            style={{
              background: "#F3F3F3 0% 0% no-repeat padding-box",
              border: "1px solid #E0E0E0",
              borderRadius: "26px",
              width: "260px",
              height: "260px",
            }}
          >
            <Image
              src="/images/wajeeh-man-icon.png"
              alt="wajeeh-man-icon"
              width={75}
              height={80}
              className="mt-2"
            />
            <h1>{adv.name}</h1>
            <p> {adv.jobTitle}</p>
            <button
              type="button"
              style={{
                background: "#151327 0% 0% no-repeat padding-box",
                border: "1px solid #707070",
                borderRadius: "50px",
                width: "208px",
                height: "46px",
                color: "#ffff",
              }}
            >
              احجز جلسة
            </button>
          </div>
        ))}
      </div>
      {/* Cards Advisers */}
    </div>
  );
}
