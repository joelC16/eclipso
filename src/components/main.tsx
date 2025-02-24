"use client"
import Nav from "@/components/nav";
import Image from "next/image";

import { TiStarburst } from "react-icons/ti";
import RegularButton from "./regularButton";
import { useScrollShrinkEffect } from "@/hooks/useTextAnimation";

export default function Main() {

  const containerRef = useScrollShrinkEffect();

  return (
    <div ref={containerRef} className="fixed -z-10 opacity-1 w-screen h-screen min-h-[800px] flex flex-col items-center justify-center bg-[#F5F5F5]">
      <div className="w-[95%] bg-white rounded-[1.5rem] flex flex-col items-center my-20 gap-16 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto max-700:p-6">
        <div className="flex items-center gap-3 px-5 py-3 bg-black rounded-[5rem] max-500:px-3 max-500:py-2">
          <TiStarburst className="text-[2rem] text-white animate-rotate-180"></TiStarburst>
          <p className="text-white text-responsiveparagraph">Available for new projects</p>
        </div>
        <h2 className="w-[90%] text-responsiveTitle text-center leading-none max-500:w-full">Your Brand’s Digital Partner made for Growth</h2>
        <p className="w-[50%] text-responsiveparagraph text-center max-700:w-[80%] max-500:w-full">Our creative ideas combined with the power of webflow gives your website special feel. Your vision, our innovation!</p>
        <RegularButton width="w-64" bgColor="bg-[#C6FB50]" title="Get Started Today" bgArrow="bg-white" colorArrow="text-black" textColor="text-black"></RegularButton>
      </div>
      <div className="w-full overflow-hidden bg-gray-100 py-4">
        <div className="flex justify-between gap-20 items-center animate-scroll-left">
          <Image src={"/images/logoEmpresa1.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa2.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa3.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa4.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa5.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa6.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa7.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa8.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa9.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa1.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa2.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa3.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa4.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa5.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa6.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa7.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa8.svg"} width={100} height={100} alt="logo de empresa"></Image>
          <Image src={"/images/logoEmpresa9.svg"} width={100} height={100} alt="logo de empresa"></Image>
          
        </div>
      </div>

    </div>
  );
}
