import MainChat from "@/components/chat/MainChat";
import Footer from "@/components/footer/footer";
import SecondNav from "@/components/second-nav/sec-nav";

export default function ChatPage() {
  return (
    <>
      <SecondNav />
      <div className="flex justify-center items-center">
        <div className="relative">
          <MainChat />
        </div>
      </div>
      <Footer />
    </>
  );
}
