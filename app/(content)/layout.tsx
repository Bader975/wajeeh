import type { Metadata } from "next";
// import { Noto_Kufi_Arabic } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
// import localFont from 'next/font/local'

// const NotoKufiArabic = Noto_Kufi_Arabic({
//   subsets: ["latin", "arabic"],
//   display: "swap",
//   variable: "--font-noto",
// });


// const expoArabic = localFont({
//   src: [
//     {
//       path:'../../public/fonts/ExpoArabic-Book.ttf',
//       weight: '700',
//     }
//   ],
//   variable: '--expo-arabic',
// })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "وجيه ",
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
      <body>
        {/* <body> */}
        <Theme>
          <NavBar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
