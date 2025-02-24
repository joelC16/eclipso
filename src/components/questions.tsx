"use client"
import Nav from "@/components/nav";
import Image from "next/image";

import RegularButton from "./regularButton";
import Carousel from "./workCarousel";
import { useCounterEffect } from "@/hooks/useTextAnimation";
import { Badge } from "./ui/badge";
import { AcordionQA } from "./acordionQA";

export default function Questions() {


    return (
        <div className="z-50 w-full h-screen min-h-[700px] flex items-center justify-center bg-[#F5F5F5]">
            <div className="w-[95%] full bg-white rounded-[3rem] p-8 pb-16 mx-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex justify-between items-center mt-8 mb-16 gap-3">
                    <h1 className="text-responsiveSubTitle leading-none">Frequently asked Questions</h1>
                    <div className="flex flex-col items-end justify-center">
                        <RegularButton width={"w-60"} bgColor={"bg-[#C6FB50]"} textColor={"text-black"} title={"Ask a question"} bgArrow={"bg-black"} colorArrow={"text-white"}></RegularButton>
                    </div>
                </div>
                <div>
                    <AcordionQA></AcordionQA>
                </div>
            </div>
        </div>
    );
}
