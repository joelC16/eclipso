import About from "@/components/about";
import Booking from "@/components/booking";
import Footer from "@/components/Footer";
import Main from "@/components/main";
import Nav from "@/components/nav";
import Pricing from "@/components/pricing";
import Questions from "@/components/questions";
import Testimonies from "@/components/testimonies";
import Work from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="relative">
        <Main></Main>
      </div>
      <div className="h-screen min-h-[800px] -z-50  pointer-events-none"></div>
      <About></About>
      <Work></Work>
      <Pricing></Pricing>
      <Testimonies></Testimonies>
      <Questions></Questions>
      <Booking></Booking>
      <Footer></Footer>
    </>
  );
}
