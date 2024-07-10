import Image from "next/image";
import { TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SecondNav() {
  return (
    <div
      style={{
        background: "url(/images/nav-bar-bg.png) 0% 0% no-repeat padding-box",
        height: "40px",
      }}
    >
      <div className="flex justify-center md:justify-between py-3 px-20 flex-wrap items-center">
        <div className="flex items-center gap-8">
          <Image
            src="/images/wajeeh-man-icon.png"
            alt=" img"
            width="80"
            height="80"
          />
          <Image
            src="/images/alert-and-setting.png"
            alt="img"
            width="200"
            height="200"
          />

          <TextField.Root
            placeholder="ابحث عن أي شيئ"
            dir="rtl"
            size={"3"}
            style={{
              width: "350px",
              height: "40px",
              borderRadius: "20px",
              background: "white",
            }}
          >
            <TextField.Slot>
              <FaMagnifyingGlass className="mx-2" />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <div className="flex justify-center gap-8">
          <Image
            src="/images/wajeeh-logo.svg"
            alt="main logo"
            width="80"
            height="80"
          />
          <Image
            src="/images/king-khalid-uni.svg"
            alt=""
            width="80"
            height="80"
          />
        </div>
      </div>
    </div>
  );
}
