import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>

        <Image src={"/images/footer-bg.png"} alt="footer bg" width={1000} height={400} style={{
            width:"100%",
            height:"100%",
            maxHeight:"601px",
        }}/>
    </>
  );
}
