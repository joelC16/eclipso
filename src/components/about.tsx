"use client"
import Image from "next/image";

import RegularButton from "./regularButton";
import { useCounterEffect } from "@/hooks/useTextAnimation";

export default function About() {

  const { counterRef, count } = useCounterEffect();

  return (
    <div id="agency" className="z-50 w-full min-h-[700px] py-20 flex items-center justify-center bg-[#F5F5F5]">
      <div className="w-[95%] h-[80%] grid grid-cols-3 grid-rows-2 gap-5 p-4 max-1000:grid-cols-2 max-1000:grid-rows-3">

        {/* Primer elemento (ocupa 2 columnas en la primera fila) */}
        <div className="relative overflow-hidden bg-black p-7 rounded-[1.9rem] text-white col-span-2">
          <h1 className="text-responsiveSubTitle w-1/2 mb-8 leading-none">Responsive for every <span className="text-[#C6FB50]">device</span> and <span className="text-[#C6FB50]">browser</span>!</h1>
          <p className="text-responsiveparagraph w-1/2">We make sure that your website is available for every device user!</p>
          <Image src={"/images/mobileResponsive.avif"} width={200} height={200} alt="Responsive design for all devices" className="absolute bottom-[-55%] right-16 w-[100px]"></Image>

        </div>

        {/* Segundo elemento (ocupa la primera columna en la segunda fila) */}
        <div className="flex flex-col justify-between bg-[#056646] p-7 rounded-[1.9rem] text-white row-start-2 col-start-1 max-600:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="text-responsiveSubTitle w-1/2 leading-none">Givebacks</h1>
            <Image src={"/images/comillas.svg"} width={50} height={50} alt="Comentarios"></Image>
          </div>
          <p className="text-responsiveparagraph mt-auto">We needed an agency to help us manage our four Webflow and began working with Eclipso. They are a fantastic and we&apos;re so glad.</p>
        </div>

        {/* Tercer elemento (ocupa la segunda columna en la segunda fila) */}
        <div className="flex justify-between bg-[#c6fb50] p-7 rounded-[1.9rem] text-white row-start-2 col-start-2 max-600:row-start-3 max-600:col-span-2">
          <div className="flex flex-col justify-end h-full gap-3">
            <h1 className="text-responsiveTitle leading-none text-black"><span ref={counterRef}>{count}</span>+</h1>
            <p className="text-responsiveparagraph text-black">Successfully launched websites</p>
            <RegularButton width={"w-52"} bgColor={"bg-white"} textColor={"text-black"} title={"Contact us"} bgArrow={"bg-black"} colorArrow={""}></RegularButton>
          </div>
          <div className="bg-white h-fit p-3 rounded-[1rem]">
            <Image src={"/images/arrow.svg"} width={30} height={30} alt="Exito subiendo webs"></Image>
          </div>
        </div>

        {/* Cuarto elemento (ocupa la tercera columna en la segunda y tercera fila) */}
        <div className="bg-[#056646] p-7 rounded-[1.9rem] text-white col-star-3 row-span-2 max-1000:col-span-2 max-1000:row-start-3 w-full h-full max-800:h-72 max-600:h-80 max-500:h-[400px] max-600:row-start-4">
          <div className="w-full items-center justify-center">
            <h1 className="text-responsiveSubTitle leading-none text-white text-center mb-5">Services</h1>
          </div>



          <div className="flex justify-around items-center">
            <div className="flex flex-col gap-5 max-1000:hidden">
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Branding</div>
              <div className="text-responsiveparagraph bg-[#FAFF5C] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Web Apps</div>
              <div className="text-responsiveparagraph bg-[#CE47A1] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Xano</div>
              <div className="text-responsiveparagraph bg-[#C6FB50] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Lumos</div>
              <div className="text-responsiveparagraph bg-[#08881F] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Migrations</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">UI UX Design</div>
              <div className="rounded-full w-fit p-3 bg-white max-1000:hidden">
                <Image src={"/images/icono.svg"} width={40} height={40} alt="Logo de la empresa eclipso"></Image>
              </div>
            </div>
            <div className="flex flex-col gap-5 max-1000:hidden">
              <div className="text-responsiveparagraph bg-[#C6FB50] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Lumos</div>
              <div className="text-responsiveparagraph bg-[#08881F] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Migrations</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">UI UX Design</div>
              <div className="text-responsiveparagraph bg-[#EABFFF] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Webflow</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Branding</div>
              <div className="text-responsiveparagraph bg-[#FAFF5C] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Web Apps</div>
              <div className="text-responsiveparagraph bg-[#044C34] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Framer</div>
            </div>

            <div className="flex flex-col gap-5 max-1000:flex-row max-1000:flex-wrap max-1000:gap-3 lg:hidden">
              <div className="text-responsiveparagraph bg-[#C6FB50] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Lumos</div>
              <div className="text-responsiveparagraph bg-[#08881F] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Migrations</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">UI UX Design</div>
              <div className="text-responsiveparagraph bg-[#EABFFF] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Webflow</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Branding</div>
              <div className="text-responsiveparagraph bg-[#FAFF5C] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Web Apps</div>
              <div className="text-responsiveparagraph bg-[#044C34] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Framer</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Branding</div>
              <div className="text-responsiveparagraph bg-[#FAFF5C] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Web Apps</div>
              <div className="text-responsiveparagraph bg-[#CE47A1] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Xano</div>
              <div className="text-responsiveparagraph bg-[#C6FB50] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Lumos</div>
              <div className="text-responsiveparagraph bg-[#08881F] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">Migrations</div>
              <div className="text-responsiveparagraph bg-[#BFFFF0] rounded-[3rem] w-fit px-8 py-3 text-black max-1400:px-4 max-1400:py-2">UI UX Design</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
