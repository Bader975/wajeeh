import React from "react";
import "../globals.css";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: " تسجيل دخول وجيه",
  description:
    "تسجيل الدخول إلى المساعد الافتراضي الأول في عالم التعليم بالتكامل مع مسارات التعلم المرن.",
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
