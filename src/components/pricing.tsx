"use client"

import RegularButton from "./regularButton";
import { useCounterEffect } from "@/hooks/useTextAnimation";
import { TiStarburst } from "react-icons/ti";
import { IoCheckmark } from "react-icons/io5";

export default function Pricing() {

    return (
        <div id="pricing" className="z-50 w-full min-h-[700px] flex flex-col items-center justify-center pt-[7.5vh] py-[5vh] bg-[#F5F5F5]">
            <div className="w-[95%]">
                <div className="flex justify-between items-center gap-10 w-full mt-8 mb-16">
                    <h1 className="text-responsiveSubTitle leading-none w-2/5">Unlock Your Growth Through Our Plans</h1>
                    <p className="text-responsiveparagraph w-1/3">Choose from our variety of plans designed to support your growth. Find the right fit and achieve your business goals!</p>
                </div>
            </div>



            <div className="flex justify-around gap-10 w-[95%] max-900:flex-col max-900:w-[70%] max-500:w-[90%]">
                <div className="flex flex-col gap-5 bg-white p-7 rounded-[1.5rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

                    <div className="flex flex-col w-fit bg-black p-1 rounded-[1.9rem]">
                        <TiStarburst className="text-[2rem] text-white animate-rotate-180"></TiStarburst>
                    </div>

                    <h2 className="text-responsiveSubTitle leading-none">Stellar growth</h2>
                    <p className="text-responsiveparagraph w-4/5 max-500:w-full">Empower your business with continuous improvements and optimizations that enhance your digital presence.</p>
                    <div className="flex items-end gap-2">
                        <p className="text-responsiveSubTitle">$3,499</p>
                        <span className="text-responsiveParagraph mb-2">/mo</span>
                    </div>
                    <RegularButton width={"w-60"} bgColor={"bg-black"} textColor={"text-white"} title={"Explore plan"} bgArrow={"bg-white"} colorArrow={"text-black"}></RegularButton>
                    <ul className="flex flex-col gap-4 ">
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Webflow/Framer Development</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Integration Setup</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Automations</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Custom Code</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Updates via Slack/Trello</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Unlimited requests</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 bg-white p-7 rounded-[1.5rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

                    <div className="flex flex-col w-fit bg-black rounded-[1.9rem] p-1">
                        <TiStarburst className="text-[2rem] text-white animate-rotate-180"></TiStarburst>
                    </div>

                    <h2 className="text-responsiveSubTitle leading-none">Project Based</h2>
                    <p className="text-responsiveparagraph w-4/5 max-500:w-full">Used for a custom fee delivered in milestones. Ideal for specific goals. Custom project scope.</p>
                    <div className="flex items-end gap-2">
                        <span className="text-responsiveParagraph mb-2">Starting at /</span>
                        <p className="text-responsiveSubTitle">$2,000</p>
                    </div>
                    <RegularButton width={"w-60"} bgColor={"bg-[#c6fb50]"} textColor={"text-black"} title={"view pricing"} bgArrow={"bg-white"} colorArrow={"text-black"}></RegularButton>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Webflow/Framer Development</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Integration Setup</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Automations</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Custom Code</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Updates via Slack/Trello</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-[#c6fb50] rounded-full p-1 w-fit h-fit">
                                <IoCheckmark size={24}></IoCheckmark>
                            </div>
                            <p className="text-responsiveparagraph">Unlimited requests</p>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    );
}
