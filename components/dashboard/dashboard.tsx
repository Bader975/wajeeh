"use client";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Courses from "./courses";
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1  md:grid-cols-4 my-28">
      <div className="flex flex-col items-center md:items-start gap-8 mb-4 px-2 text-center">
      <FaHome className="text-black mb-8" size={24} />
        <button className="bg-gray-200 text-center py-2 rounded-md w-[130px] h-[38px] hover:shadow-xl transition-shadow duration-300">
          الرئيسية
        </button>
        <button className="bg-gray-200 text-center py-2 rounded-md w-[130px] h-[38px] hover:shadow-xl transition-shadow duration-300">
          الاعدادات
        </button>
        <button className="bg-gray-200 text-center py-2 rounded-md w-[130px] h-[38px] hover:shadow-xl transition-shadow duration-300">
          التقارير
        </button>
        <button className="bg-gray-200 text-center py-2 rounded-md w-[130px] h-[38px] hover:shadow-xl transition-shadow duration-300">
          الدورات
        </button>
        <button className="bg-gray-200 text-center py-2 rounded-md w-[130px] h-[38px] hover:shadow-xl transition-shadow duration-300">
          الخدمات
        </button>
        <button className="bg-gray-200 text-center py-2 rounded-md w-[130px] h-[38px] hover:shadow-xl transition-shadow duration-300">
          اتصل بنا
        </button>
      </div>

      <div className="md:col-span-3 space-y-8 mt-3">
        <div className="flex justify-center gap-8 flex-wrap">
          <Image
            src={"/images/dash/hello-wajeh.png"}
            alt="two-ipads"
            width={350}
            height={230}
          />

          <div
            className="flex flex-col justify-around hover:shadow-xl transition-shadow duration-300"
            style={{
              border: "1px solid #DFEAF2",
              borderRadius: "25px",
              width: "340px",
            }}
          >
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 justify-between">
              <button className="bg-gray-200 hover:bg-gray-400 text-center py-2 rounded-md">
                قياس أداء
              </button>
              <button className="bg-gray-200 hover:bg-gray-400 text-center py-2 rounded-md">
                CV وجيه
              </button>
              <button className="bg-gray-200 hover:bg-gray-400 text-center py-2 rounded-md">
                وجيه HR
              </button>
              <button className="bg-gray-200 hover:bg-gray-400 text-center py-2 rounded-md">
                وجيهني
              </button>
              <button className="bg-gray-200 hover:bg-gray-400 text-center py-2 rounded-md">
                تحديات وجيه
              </button>
              <button className="bg-gray-200 hover:bg-gray-400 text-center py-2 rounded-md">
                دورات
              </button>
            </div>

            <button
              type="button"
              style={{
                background:
                  "transparent linear-gradient(109deg, #01454F 0%, #13574F 18%, #35764F 43%, #51914F 61%, #6FAD4F 84%, #94CC52 100%) 0% 0% no-repeat padding-box",
                borderRadius: "25px",
                height: "70px",
                color: "white",
              }}
              onClick={()=>router.push('/chat')}
            >
              أبـــــــدأ الآن
            </button>
          </div>

          <Image
            src={"/images/dash/loptop.png"}
            alt="two-ipads"
            width={350}
            height={230}
          />
        </div>

        {/* ----------------------------------- */}

        <div className="flex justify-center gap-8 flex-warp flex-1">
          <div className="flex flex-col justify-center ">
            <h1 className="text-right font-bold text-xl"> تقارير الانجاز</h1>
            <Image
              src={"/images/dash/dount.png"}
              alt="two-ipads"
              width={350}
              height={230}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-right font-bold text-xl">احصائيات الشهر</h1>
            <Image
              src={"/images/dash/statistics-month.png"}
              alt="two-ipads"
              width={700}
              height={230}
            />
          </div>
        </div>

        <div className="flex justify-center gap-8 flex-warp flex-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-right font-bold text-xl"> معدلات النمو</h1>
            <Image
              src={"/images/dash/yellow-img.png"}
              alt="two-ipads"
              width={350}
              height={230}
            />

            <Image
              src={"/images/dash/green-img.png"}
              alt="two-ipads"
              width={350}
              height={230}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-right font-bold text-xl"> نقاط التقدم</h1>
            <Image
              src={"/images/dash/long-green.png"}
              alt="two-ipads"
              width={635}
              height={230}
            />
          </div>
        </div>
        <div className="flex justify-end items-center main-h-[250px] flex-wrap">
          <div className="flex flex-col items-start mx-auto flex-wrap">
            <h1 className="text-right font-bold text-xl">الدورات</h1>
            <Courses />
          </div>
        </div>
      </div>
      {/* <div className="col-span-3 bg-[#f6f8fa] h-[250px] w-[100wv]">
       <div className=" flex justify-end items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-right font-bold text-xl">الدورات</h1>
            <Courses />
          </div>
        </div> 
       </div>  */}
    </div>
  );
}
