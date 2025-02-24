"use client"
import Nav from "@/components/nav";
import Image from "next/image";

import RegularButton from "./regularButton";
import { useCounterEffect } from "@/hooks/useTextAnimation";
import { TiStarburst } from "react-icons/ti";
import { IoCheckmark } from "react-icons/io5";
import TestimonialCarousel from "./testimonial-carousel";

export default function Testimonies() {


    return (
        <div className="z-50 w-full h-screen min-h-[700px] flex flex-col items-center justify-center pt-[7.5vh] bg-[#F5F5F5]">
            <div className="w-[95%]">
                <div className="flex flex-col items-center gap-10 w-full mt-8 mb-16">
                    <div className="px-3 py-2 bg-[#C6FB50] rounded-[4rem]">
                        You won´t believe this
                    </div>
                    <h1 className="text-responsiveSubTitle leading-none w-2/5 text-center">Our Clients Can’t Say
                    Anything Bad About Us</h1>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-full h-full flex flex-col justify-end max-1600:hidden">
                    <div className="w-24 ml-[5%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards1.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                    <div className="w-24 ml-[30%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards2.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                    <div className="w-24 ml-[55%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards3.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                    <div className="w-24 ml-[80%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards4.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                </div>
                <TestimonialCarousel></TestimonialCarousel>
                <div className="w-full h-full flex flex-col justify-start max-1600:hidden">
                    <div className="w-24 ml-[80%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards5.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                    <div className="w-24 ml-[55%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards6.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                    <div className="w-24 ml-[30%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards7.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                    <div className="w-24 ml-[5%]  max-1600:ml-[50%]">
                        <Image src={"/images/awards8.jpg"} alt="awards" width={100} height={100} className="w-full rounded-[0.4rem]"></Image>
                    </div>
                </div>
            </div>

        </div>
    );
}
