import Banner from "@/components/home/banner/banner";
import TwoIpads from "@/components/home/two-ipads/two-ipads";
import PhonesSection from "@/components/home/two-phones/phones-section";
import UiServices from "@/components/home/ui-services/ui-services";
import WhyWajeeh from "@/components/home/why-wajeeh/why-wajeeh";
import NavBar from "@/components/nav-bar/nav-bar";

export default function HomePage() {
  return (
   <>
     <NavBar />
    <main className="flex flex-col justify-center min-h-screen min-w-screen">
      <Banner />
      <PhonesSection />
      <UiServices />
      <WhyWajeeh />
      <TwoIpads />
    </main>
    </>
  );
}
