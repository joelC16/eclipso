
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AcordionQA() {
    return (
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            <AccordionItem value="item-1" className="group border rounded-[1rem] px-5 py-2">
                <AccordionTrigger className="">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#C6FB50] rounded-full p-2">
                            <Image src={"/images/star.svg"} width={30} height={30} alt="frecuent questions" className="group-hover:animate-rotate-180"></Image>
                        </div>
                        <p className="text-responsiveparagraph">
                            How much do you charge for a website?
                        </p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="border-none">
                    <p className="text-responsiveparagraph ml-16 mt-3">
                        The cost of a website varies based on the complexity and specific requirements of each project. Contact us for a personalized quote based on your needs.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="group border rounded-[1rem] px-5 py-2">
                <AccordionTrigger className="">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#C6FB50] rounded-full p-2">
                            <Image src={"/images/star.svg"} width={30} height={30} alt="frecuent questions" className="group-hover:animate-rotate-180"></Image>
                        </div>
                        <p className="text-responsiveparagraph">
                            How long does it take to design and develop a website?
                        </p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="border-none">
                    <p className="text-responsiveparagraph ml-16 mt-3">
                        The turnaround time depends on the size of the project. If you already have a design ready, it can take between 5 days to 2 weeks. However, if you require design services as well, it can take anywhere from 1.5 weeks to 3 weeks.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="group border rounded-[1rem] px-5 py-2">
                <AccordionTrigger className="">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#C6FB50] rounded-full p-2">
                            <Image src={"/images/star.svg"} width={30} height={30} alt="frecuent questions" className="group-hover:animate-rotate-180"></Image>
                        </div>
                        <p className="text-responsiveparagraph">
                            Can you help with redesigning an existing website?
                        </p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="border-none">
                    <p className="text-responsiveparagraph ml-16 mt-3">
                        Absolutely! We specialize in redesigning existing websites to improve their functionality, appearance, and user experience, aligning them with your current business goals and branding.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="group border rounded-[1rem] px-5 py-2">
                <AccordionTrigger className="">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#C6FB50] rounded-full p-2">
                            <Image src={"/images/star.svg"} width={30} height={30} alt="frecuent questions" className="group-hover:animate-rotate-180"></Image>
                        </div>
                        <p className="text-responsiveparagraph">
                            Can I maintain website after development
                        </p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="border-none">
                    <p className="text-responsiveparagraph ml-16 mt-3">
                        Yes, we use Client-First and Lumos frameworks for development which provide easy management or any changes on the website!
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
