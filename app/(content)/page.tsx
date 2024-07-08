"use client"
import Chat from "@/components/Chat";
import Banner from "@/components/home/banner/banner";
import TwoIpads from "@/components/home/two-ipads/two-ipads";
import PhonesSection from "@/components/home/two-phones/phones-section";
import UiServices from "@/components/home/ui-services/ui-services";
import WhyWajeeh from "@/components/home/why-wajeeh/why-wajeeh";

import { prismaDb } from "@/db";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center min-h-screen min-w-screen">
      <Banner/>
      <PhonesSection/>
      <UiServices/>
      <WhyWajeeh/>
      <TwoIpads/>
    </main>
  );
}
