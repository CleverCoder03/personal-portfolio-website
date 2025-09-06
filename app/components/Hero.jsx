"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Hero = () => {
    useGSAP(()=>{
        const titleSplit = new SplitText("#title h1", {type: "chars words"})

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.04
        })
        gsap.from("#title p", {
            opacity:0,
            duration: 0.8,
            ease: "power1.in"
        })

    })
  return (
    <main id="title" className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-5xl font-bold">🚀 My Portfolio</h1>
      <p className="mt-8 text-lg font-semibold ">yooo! lets go b*tch, launching soon.🔥🔥</p>
    </main>
  );
};

export default Hero;
