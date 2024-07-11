import React from "react";
import Image from "next/image";

export default function Courses() {
  const imagesUrl = [
    "course-4.png",
    "course-3.png",
    "course-1.png",
    "course-2.png",
  ];

  return (
    <div className="flex flex-wrap justify-evenly overflow-auto">
      {imagesUrl.map((imgurl: string) => (
        <Image
          key={imgurl}
          src={`/images/dash/courses/${imgurl}`}
          alt="course"
          width={230}
          height={185}
          className="w-[230px] h-[185px] object-cover object-center"
        />
      ))}
    </div>
  );
}
