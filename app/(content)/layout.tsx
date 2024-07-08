import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";

const inter = Inter({ subsets: ["latin"] }) ;

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: "وجيه  ",
  description:
    " المساعد الافتراضي الأول في عالم التعليم بالتكامل مع مسارات التعلم المرن",
  authors: [{ name: "Bader Alyami" }, { name: "BADER", url: "/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <Theme>
          <NavBar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
