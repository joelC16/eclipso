'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Star } from 'lucide-react';


interface Testimonial {
    id: number
    rating: number
    quote: string
    author: string
    title: string
}
const testimonials: Testimonial[] = [
    {
        id: 1,
        rating: 5,
        quote:
            "We needed an agency to help us manage our four Webflow subdomains and began working with Eclipso. They are a fantastic partner and we're so glad we found them. Their work is on time, high-quality, and they're very easy to work with! Rachel S.- Marketing Director They are an incredibly skilled Webflow team that brings designs to life with precision and creativity. They follow our specs perfectly and come up with smart solutions when needed. Every detail we requested was developed seamlessly, and the results were exactly what we envisioned.",
        author: "Rachel S",
        title: "Marketing Director",
    },
    {
        id: 2,
        rating: 5,
        quote: "They are an incredibly skilled Webflow team that brings designs to life with precision and creativity. They follow our specs perfectly and come up with smart solutions when needed. Every detail we requested was developed seamlessly, and the results were exactly what we envisioned.",
        author: "Michael P",
        title: "CEO",
    },
    {
        id: 3,
        rating: 5,
        quote: "Milan and the rest of the guys were very easy to work with. The team is experienced, highly professional, and responsive, completing tasks in a timely manner. We are very happy with the result and can absolutely recommend them to anyone looking to build a site with Webflow.",
        author: "Sarah L",
        title: "Product Manager",
    },
    {
        id: 3,
        rating: 5,
        quote: "They did an amazing job redesigning our corporate website on Webflow. They understood our vision perfectly and delivered a product that exceeded our expectations.",
        author: "Sergi C.",
        title: "Product Manager",
    },
]

export default function CardSlider() {
    const [deck, setDeck] = useState(testimonials.map((_, index) => index));

    const moveCardToBack = (index: number) => {
        setDeck((prev) => {
            const newDeck = [...prev];
            const [movedCard] = newDeck.splice(index, 1);
            newDeck.push(movedCard);
            return newDeck;
        });
    };

    return (
        <div className="relative w-full px-30 h-[550px] flex items-center justify-center overflow-hidden max-600:h-[500px]">
            {deck.map((card, index) => (
                <motion.div
                    key={card}
                    drag
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    onDragEnd={() => {
                        moveCardToBack(index);
                    }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute w-[500px] max-600:w-[400px] max-500:w-[300px] h-[95%] bg-white  shadow-lg rounded-lg flex items-center justify-center text-2xl font-bold"
                    style={{ zIndex: deck.length - index }}
                >
                    <Card className="w-full h-full space-y-4 bg-white shadow-lg border-2 overflow-hidden p-9">
                        <div className="flex gap-1">
                            {[...Array(testimonials[card].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                        </div>
                        <blockquote className="text-xl text-responsiveparagraph font-normal overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            "{testimonials[card].quote}"
                        </blockquote>
                        <div className="flex items-center justify-between w-[90%] gap-2 absolute bottom-6 left-6">
                            <div className="inline-flex items-center px-3 py-2 rounded-full bg-[#E1FF7E] text-black">
                                <span className="text-responsiveparagraph font-normal">
                                    {testimonials[card].author} - {testimonials[card].title}
                                </span>
                            </div>
                            <div className="bg-[#E1FF7E] h-fit w-fit p-2 rounded-[0.6rem]">
                                <img src={"/images/arrow.svg"} width={20} height={20} alt="Exito subiendo webs" className="-rotate-45"></img>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}