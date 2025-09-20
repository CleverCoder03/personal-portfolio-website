"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { lazy } from "react";
import Header from "./Header";
import About1 from "./About1";
import Project from "./Project";
import About2 from "./About2";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  // useGSAP(() => {
  //   const titleSplit = new SplitText("#title h1", { type: "chars words" });

  //   gsap.from(titleSplit.chars, {
  //     yPercent: 100,
  //     stagger: 0.04,
  //   });
  //   gsap.from("#title p", {
  //     opacity: 0,
  //     duration: 0.8,
  //     ease: "power1.in",
  //   });
  // });
  return (
    <main
      id="title"
      className="flex flex-col min-h-screen text-black py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18"
    >
      <div className="hidden w-full lg:flex justify-center text-xl font-ppneune-medium font-medium md:text-2xl">
        <div className="w-1/2 inline-flex relative left-[25vw]">
          <h1 className="w-40 leading-[1]">Currently a Freelacer</h1>
        </div>
        <div className="w-1/2">
          <h1 className="w-40 leading-[1]">Based in Mumbai, India</h1>
        </div>
      </div>

      {/* HERO SECTION */}
      <Header />

      {/* ABOUT SECTION PART-1 */}
      <About1 />

      {/* PROJECT SECTION */}
      <Project />

      {/* ABOUT SECTION PART-2 */}
      <About2 />

      {/* CONTACT Section */}
      <Contact />

      {/* FOOTER Section */}
      <Footer />
    </main>
  );
};

export default Hero;
