import React from "react";
import classes from "./navBar.module.css";
import Link from "next/link";
import Image from "next/image";
export default function navBar() {
  return (
    <>
      <nav className={classes["nav-bar"]}>
        <ul className="flex justify-center md:justify-between py-3 px-3 content-center items-center pt-2 flex-wrap gap-6">
          <Image
            src="/images/wajeeh-logo.svg"
            alt="main logo"
            width="122"
            height="52"
          />

          <li className={classes["nav-link"]}>
            <Link href={"/"}>الرئيسة</Link>
          </li>

          <li className={classes["nav-link"]}>
            <Link href={"/"}>عن وجيه</Link>
          </li>

          <li className={classes["nav-link"]}>
            <Link href={"/"}>مزايا وجيه</Link>
          </li>

          <li className={classes["nav-link"]}>
            <Link href={"/"}>اتصل بنا</Link>
          </li>

          <li className={classes["nav-link"]}>
            <Image
              src={"/images/settings.svg"}
              alt="wajeeh man"
              width={18}
              height={18}
              style={{
                display: "inline-block",
                marginLeft: "1rem",
              }}
            />
            <Link href={"/dashboard"}>لوحة التحكم</Link>
          </li>

          <li className={classes["nav-link"]}>
            <Image
              src={"/images/user.svg"}
              alt="wajeeh man"
              width={18}
              height={18}
              style={{
                display: "inline-block",
                marginLeft: "1rem",
              }}
            />
            <Link href={"/login"}>الدخول</Link>
          </li>

          <Image
            src="/images/king-khalid-uni.svg"
            alt=""
            width="93"
            height="74"
          />
        </ul>
      </nav>
    </>
  );
}
