"use client"

import RegularButton from "./regularButton";
import { TiStarburst } from "react-icons/ti";

export default function Booking() {


    return (
        <div id="contact" className="z-50 w-full h-screen min-h-[700px] flex items-center justify-center bg-[#F5F5F5]">
            <div className="w-[95%] flex flex-col items-center gap-10 bg-[#C6FB50] rounded-[3rem] p-8 pb-16 py-24 mx-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-500:p-6 max-500:pb-12 max-500:py-20">
                <div className="flex items-center gap-3 px-5 py-3 bg-black rounded-[5rem]">
                    <TiStarburst className="text-[2rem] text-white animate-rotate-180"></TiStarburst>
                    <p className="text-white">Booking Q1 & Q2</p>
                </div>
                <h2 className="w-[90%] text-responsiveTitle text-center leading-none">Let’s Collab</h2>
                <p className="w-[40%] text-responsiveparagraph text-center max-800:w-[80%]">Fill our form, book a call or contact us via email and let&apos;s see if we are good fit!</p>
                <RegularButton width="w-64" bgColor="bg-white" title="Book a call" bgArrow="bg-black" colorArrow="text-white" textColor="text-black"></RegularButton>

            </div>
        </div>
    );
}
