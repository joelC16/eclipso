"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);  





const useScrollShrinkEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { scale: 1, opacity: 1, y: 0 }, // 🔹 Estado inicial normal
      {
        scale: 0.8, // Se reduce a 60%
        opacity: 0, // Se desvanece
        y: 100, // Se mueve hacia abajo
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 0%", // 🔹 Inicia cuando el top del div está en el 10% de la pantalla
          end: "top -50%", // 🔹 Termina cuando el div desaparece de la vista
          scrub: 1, // 🔹 Hace la animación fluida con el scroll
        },
      }
    );
  }, []);

  return containerRef;
};


const useHoverEffect = () => {
    const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement)[]>([]);
  
    useEffect(() => {
      const handleHoverIn = (index: number) => {
      const spanElement = textRefs.current[index]?.querySelector("span");
      if (spanElement) {
        gsap.to(spanElement, {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      };
  
      const handleHoverOut = (index: number) => {
        const spanElement = textRefs.current[index]?.querySelector("span");

        if (spanElement) {
          gsap.to(spanElement, {
            width: "0%",
            duration: 0.4,
            ease: "power2.in",
          });
        }
      };

  
      textRefs.current.forEach((el, index) => {
        if (el) {
          el.addEventListener("mouseenter", () => handleHoverIn(index));
          el.addEventListener("mouseleave", () => handleHoverOut(index));
        }
      });
  
      return () => {
        textRefs.current.forEach((el, index) => {
          if (el) {
            el.removeEventListener("mouseenter", () => handleHoverIn(index));
            el.removeEventListener("mouseleave", () => handleHoverOut(index));
          }
        });
      };
    }, []);
  
    return textRefs;
  };

  const useCounterEffect = () => {
    const counterRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!counterRef.current) return;
  
      let obj = { count: 0 };
  
      gsap.to(obj, {
        count: 50,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => setCount(Math.floor(obj.count)),
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%", 
          end: "top 20%", 
          toggleActions: "play pause resume reset",
        },
      });
  
      return () => {
        if (counterRef.current) {
          ScrollTrigger.getById(counterRef.current.id)?.kill();
        }
      };
    }, []);
  
    return { counterRef, count };
  };
  


  

export { useHoverEffect, useScrollShrinkEffect, useCounterEffect };
