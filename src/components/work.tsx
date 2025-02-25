"use client"

import RegularButton from "./regularButton";
import Carousel from "./workCarousel";

export default function Work() {


    return (
        <div id="work" className="z-50 w-full h-screen min-h-[700px] flex items-center justify-center bg-[#F5F5F5] px-4">
            <div className="w-full full bg-black rounded-[3rem] p-8 pb-16 text-white">
                <div className="flex justify-between items-center mt-8 mb-16">
                    <h1 className="text-responsiveSubTitle leading-none">Featured work</h1>
                    <RegularButton width={"w-60"} bgColor={"bg-white"} textColor={"text-black"} title={"View more"} bgArrow={"bg-black"} colorArrow={""}></RegularButton>
                </div>
                <div>
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    );
}
