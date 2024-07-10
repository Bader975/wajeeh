"use client";
import React, { useEffect, useState } from "react";

export default function GuideMe() {
  const [show, isShow] = useState(false);
  const dataGuideMe = [
    `الشهادات الاحترافية /


1. PMP(Project Management Professional)
2. CISSP(Certified Information Systems Security Professional)
3. CPA (Certified Public Accountant)
4. CFA (Chartered Financial Analyst)
5. AWS Certified Solutions Architect
6. CompTIA A+
7. Six Sigma Green Belt/Black Belt
8. SHRM-CP (Society for Human Resource Management Certified Professional)
9. Google Certified Professional Data Engineer
10. Cisco CCNA (Cisco Certified Network Associate)
`,
    `أسماء مؤثرين في علوم الحاسب/
1-@malsubaie21
2-@hknl55
3-@FN_Alshehrii 
4-@qahtanlLayan 
5-@lx25li 
6-@Mahja_CS
7-@sekaash 
8-@iYaraAl 
9-@iMFahadS_

`,
  ];

  useEffect(() => {
    setTimeout(() => isShow(true), 1000);
  }, [show]);
  return (
    <div className="chat-container">
      <div className="scroll-area">
        {show &&
          dataGuideMe.map((text: string, index) => (
            <p
              key={text}
              className="text-center w-[80%] my-6 text-white p-3"
              style={{
                borderRadius: "20px",
                background:
                  index % 2 == 0
                    ? "transparent linear-gradient(95deg, #01454F 0%, #13574F 18%, #35764F 43%, #51914F 61%, #6FAD4F 84%, #94CC52 100%) 0% 0% no-repeat padding-box"
                    : "transparent linear-gradient(94deg, #2A9C89 0%, #60AE65 55%, #7FC042 100%) 0% 0% no-repeat padding-box",
              }}
            >
              {text}
            </p>
          ))}
      </div>
    </div>
  );
}
