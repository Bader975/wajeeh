"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation'
import * as Checkbox from "@radix-ui/react-checkbox";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
export default function Login() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[100wv]">
      <div className="flex-col items-center justify-center w-full block mt-28">
        <div className="flex justify-center gap-8">
          <Image
            src="/images/wajeeh-logo.svg"
            alt="main logo"
            width="160"
            height="80"
          />
          <Image
            src="/images/king-khalid-uni.svg"
            alt=""
            width="120"
            height="108"
          />
        </div>
        {/* Login From */}

        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white p-4  max-w-sm w-full">
            <h1 className="text-right text-[#0F2837] text-3xl font-bold my-8">
              تسجيل <span className="text-[#00AC9D]"> الدخول</span>
            </h1>
            <form className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="الرقم الجامعي"
                  className="w-full px-8 py-2 text-right border rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <span className="absolute inset-y-0 right-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.385"
                    height="20.347"
                    viewBox="0 0 22.385 20.347"
                  >
                    <path
                      id="Path_23980"
                      data-name="Path 23980"
                      d="M51.053,127.215v-.51a12.794,12.794,0,0,0-.063-1.816,5.1,5.1,0,0,0-4.236-4.237,12.815,12.815,0,0,0-1.817-.063H38.822c-2.854,0-4.281,0-5.371.556a5.1,5.1,0,0,0-2.227,2.227c-.555,1.09-.555,2.517-.555,5.372v2.038c0,2.854,0,4.281.555,5.372a5.089,5.089,0,0,0,2.227,2.227c1.09.556,2.517.556,5.371.556h6.116a12.664,12.664,0,0,0,1.817-.063,5.094,5.094,0,0,0,4.236-4.236,12.788,12.788,0,0,0,.063-1.816v-.51m-4.077-6.625-1.019.679-.573.382a11.52,11.52,0,0,1-3.335,1.847,5.112,5.112,0,0,1-2.375,0,11.52,11.52,0,0,1-3.335-1.847l-.573-.382-1.019-.679"
                      transform="translate(-29.668 -119.59)"
                      fill="none"
                      stroke="#d1d1d1"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  className="w-full px-8 py-2 text-right border rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <span className="absolute inset-y-0 right-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.347"
                    height="22.385"
                    viewBox="0 0 20.347 22.385"
                  >
                    <path
                      id="Path_23943"
                      data-name="Path 23943"
                      d="M131.212,389.374h.612c2.283,0,3.425,0,4.3.444A4.072,4.072,0,0,1,137.9,391.6c.444.872.444,2.014.444,4.3v1.223c0,2.283,0,3.425-.444,4.3a4.072,4.072,0,0,1-1.782,1.782c-.872.444-2.014.444-4.3.444h-5.3c-2.283,0-3.425,0-4.3-.444a4.079,4.079,0,0,1-1.782-1.782c-.444-.872-.444-2.014-.444-4.3V395.9c0-2.283,0-3.425.444-4.3a4.079,4.079,0,0,1,1.782-1.782c.872-.444,2.014-.444,4.3-.444h.612m-3.058,0V388.15a7.6,7.6,0,0,1,.333-3.223,3.067,3.067,0,0,1,1.336-1.336,7.6,7.6,0,0,1,3.223-.333h.408a7.6,7.6,0,0,1,3.223.333,3.067,3.067,0,0,1,1.336,1.336,7.6,7.6,0,0,1,.333,3.223v1.223m-5.1,6.116v2.038"
                      transform="translate(-119 -382.258)"
                      fill="none"
                      stroke="#d1d1d1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-5">
                  <input type="checkbox" id="remember" className="hidden" />
                  <label
                    htmlFor="remember"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white">
                      <AiOutlineCheck
                        size={50}
                        style={{
                          color: "#52A39D",
                        }}
                      />
                    </div>
                    <span className="mr-2 text-md font-medium text-[#0F2837]">
                      تذكرني على هذا الجهاز
                    </span>
                  </label>
                </div>

                <div className="text-center">
                  <a href="#" className="text-[#52A39D] hover:underline">
                    لديك حساب؟
                  </a>
                </div>
              </div>
<Link href={"/dashboard"}>
              <button
                type="submit"
                className="w-full py-2 bg-green-600 font-bold text-white rounded-2xl hover:bg-green-700 transition duration-200"
                style={{
                  background:
                    "linear-gradient(to right, #01454F, #13574F, #35764F,#51914F,#6FAD4F,#94CC52)",
                }}
                
              >
                الدخول
              </button>
</Link>
              <button
                type="button"
                className="w-full py-2 mt-4 font-bold bg-[#EEEEEE] text-[#0F2837] rounded-2xl hover:bg-gray-300 transition duration-200"
              >
                ليس لديك حساب
              </button>
            </form>
          </div>
        </div>

        <div className="justify-self-center">
          <Image
            src={"/images/small-side-bg.svg"}
            alt="side-login-bg"
            width={160}
            height={330}
            style={{
              objectFit: "contain",
              height: "100%",
              maxHeight: "330px",
            }}
          />
        </div>
      </div>

      <div className="justify-self-end hidden md:block">
        <Image
          src={"/images/bg-side-login.png"}
          alt="side-login-bg"
          width={500}
          height={1100}
          style={{
            objectFit: "cover",
            backgroundColor: "transparent",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
