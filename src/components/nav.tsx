"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useHoverEffect } from "@/hooks/useTextAnimation";
import RegularButton from "./regularButton";
import { Menu, X } from "lucide-react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const hoverText = useHoverEffect();

    return (
        <nav className="z-[100] fixed w-full flex items-center justify-between py-3 bg-white px-[2.5%]">
            <Link href="/" className="z-50 flex items-center gap-2">
                <Image src="/images/icono.svg" alt="icono de eclipso" width={30} height={30} />
                <h1 className="font-unbounded text-[1.1rem]">Eclipso</h1>
            </Link>
            
            {/* Botón Hamburguesa */}
            <button className="z-50 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
            
            {/* Menú para desktop */}
            <ul className="hidden md:flex gap-7 items-center">
                {["Agency", "Work", "Pricing", "Contact"].map((item, index) => (
                    <li key={index}>
                        <Link href={`#${item.toLowerCase()}`} className="relative">
                            <p ref={(el) => { if (el) hoverText.current.push(el); }} className="text-[0.9rem]">
                                {item}
                                <span className="block h-[1px] bg-black w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </li>
                ))}
                <li>
                    <RegularButton width="w-44" bgColor="bg-black" title="Book a call" bgArrow="bg-white" colorArrow="text-black" textColor="text-white" />
                </li>
            </ul>
            
            {/* Menú móvil */}
            <div className={`fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col items-center pt-20`}> 
                { ["Agency", "Work", "Pricing", "Contact"].map((item, index) => (
                    <Link key={index} href={""} className="py-3 text-lg" onClick={() => setIsOpen(false)}>
                        {item}
                    </Link>
                ))}
                <RegularButton width="w-44 mt-5" bgColor="bg-black" title="Book a call" bgArrow="bg-white" colorArrow="text-black" textColor="text-white" />
            </div>
        </nav>
    );
}
