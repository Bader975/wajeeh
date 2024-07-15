import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, DropdownMenu } from "@radix-ui/themes";
import classes from "./navBar.module.css";

const BurgerIcon = () => (
  <div>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z"
      fill="currentColor"
    />
  </svg>
</div>
);

export default function NavBar() {
  return (
    <nav className={classes["nav-bar"]}>
      <div className="flex justify-between items-center py-3 gap-8  px-10 md:px-20 mx-8 md:mx-14">
      <Image
          src="/images/wajeeh-logo.svg"
          alt="main logo"
          width="122"
          height="52"
          className="block md:hidden"
        />
        <div className="md:hidden bg-[#236547]">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <Button style={{ backgroundColor: "transparent", borderRadius: "0.25rem", padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" ,color:"white" }}>
            <BurgerIcon /> 
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="2" variant="soft" highContrast style={{
                width: "150px",  // Adjust width as needed
                padding: "1rem",  // Adjust padding as needed
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
              }}
              className="mt-2">
              <DropdownMenu.Item>
                <Link href={"/"}>الرئيسة</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/#about"}>عن وجيه</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/#ui-services"}>مزايا وجيه</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/"}>اتصل بنا</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/dashboard"}>لوحة التحكم</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/login"}>الدخول</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <ul className="hidden md:flex flex-row justify-center md:justify-between py-3 px-10 md:px-20 mx-8 md:mx-14 content-center items-center pt-2 flex-wrap gap-10">
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
          <Link href={"/#about"}>عن وجيه</Link>
        </li>

        <li className={classes["nav-link"]}>
          <Link href={"/#ui-services"}>مزايا وجيه</Link>
        </li>

        <li className={classes["nav-link"]}>
          <Link href={"/"}>اتصل بنا</Link>
        </li>

        <li className={classes["nav-link"]}>
          <Image
            src={"/images/settings.svg"}
            alt="settings"
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
            alt="user"
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
          alt="king khalid university"
          width="93"
          height="74"
        />
      </ul>
    </nav>
  );
}
