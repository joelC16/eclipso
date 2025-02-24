"use client"

import { IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";


export default function RegularButton({ width, bgColor, textColor, title, bgArrow, colorArrow }: { width:string, bgColor: string, textColor: string, title: string, bgArrow: string, colorArrow: string }) {

    return (

        <Link href={""} className={`group ${width} z-50 w-44 h-12 flex items-center justify-center gap-0 ${bgColor} px-3 py-2 rounded-[2rem] hover:gap-3 transition-all ease-in-out duration-300`}>
            <p className={`${textColor}`}>{title}</p>
            <div className={`flex items-center justify-center rounded-full w-0 h-0 ${bgArrow} group-hover:w-8 group-hover:h-8 transition-all ease-in-out duration-300 delay-300`}>
                <IoIosArrowRoundForward className={`text-[1.5rem] ${colorArrow}`}></IoIosArrowRoundForward>
            </div>
        </Link>

    );

}
