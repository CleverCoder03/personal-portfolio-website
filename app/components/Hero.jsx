"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import React, { lazy } from "react";

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
        <div className="w-1/2 text-right">
          <h1 className="">Currently a Freelacer</h1>
        </div>
        <div className="w-1/2">
          <h1 className="w-40">Based in Mumbai, India</h1>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="mt-[6dvh]">
        <div className="mt-[10dvh] w-65 text-xl font-ppneune-medium uppercase lg:hidden">
          I support designers and agencies with creative development
        </div>

        <div className="mt-8.5 uppercase text-[11.2dvw] font-ppneune-medium leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
          <h1>Creative</h1>
          <h1>Developer</h1>
        </div>

        <div className="mt-10 w-[78dvw] h-[30dvh] lg:h-[27dvh] lg:w-[37dvw]">
          <div className="relative w-full h-full">
            <Image
              // src="/hero-profile-color-mobile.jpeg"
              src="/hero-profile.png"
              alt="hero-image"
              className="object-center object-cover mix-blend-luminosity"
              fill
            />
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between lg:flex-row-reverse">
          <div className="uppercase text-[11.2dvw] font-ppneune-medium leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw] lg:text-right">
            <h1>vishal</h1>
            <h1>mishra</h1>
          </div>

          <div className="hidden lg:block">
            <div className="w-65 text-xl font-ppneune-medium uppercase">
              I support designers and agencies with creative development
            </div>
          </div>

          <div className="uppercase text-[12dvw] font-ppneune-medium mr-5 leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            &darr;
          </div>
        </div>
      </section>

      {/* ABOUT SECTION PART-1 */}
      <section className="mt-34">
        <div className="text-xl font-ppneune-medium">
          <h1>01/</h1>
        </div>

        <div className="mt-7">
          <p className="text-3xl uppercase font-ppneune-medium">
            Passionate about web technologies. I love working at the
            intersection of creativity and user friendly interfaces. I create
            memorable web experiences.
          </p>
        </div>

        <div className="mt-9">
          <p className="text-3xl uppercase font-ppneune-medium">
            When I'm not building or exploring new web experiences, I'm probably
            playing games or watching football.
          </p>
        </div>

        <div className="">
          <p className="mt-12 text-xl font-ppneune-medium w-60">
            A blend of UI and product engineering.
          </p>
          <div>
            <p className="mt-8 text-xl font-ppneune-medium">
              With a background in design, I work closely with design focused
              teams to build websites and microsites for companies and
              individuals. I have years of experience working and collaborating
              on product teams and leading engineering efforts.
            </p>
            <p className="mt-8 text-xl font-ppneune-medium">
              With my experience in UI and product engineering, I solve product
              problems and build appealing usable web experiences.
            </p>
            <p className="mt-8 text-xl font-ppneune-medium underline underline-offset-[30px] decoration-1">
              More about me and services
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="mt-52">
        <div className="text-xl font-ppneune-medium flex gap-30">
          <h1>02/</h1>
          <h1 className="w-20 uppercase">Recent Projects</h1>
        </div>

        {/* PROJECT 1 */}
        <div>
          <div className="mt-22">
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-4 decoration-4">
              Zodius
            </h1>
            <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
              A gaming like website with gsap creative web animation
            </p>
          </div>

          <div className="relative w-full h-[45dvh]">
            <Image src="/zodius-cover.jpg" alt="zodius-cover" fill />
          </div>
        </div>

        {/* PROJECT 2 */}
        <div>
          <div className="mt-15">
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[12dvw] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-4 decoration-4 w-30">
              Vector mojo
            </h1>
            <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
              A gaming like website with gsap creative web animation
            </p>
          </div>

          <div className="relative w-full h-[45dvh]">
            <Image src="/vector-cover.jpg" alt="zodius-cover" fill />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION PART-2 */}
      <section className="mt-48">
        <div className="text-xl font-ppneune-medium flex gap-30">
          <h1>03/</h1>
          <h1 className="uppercase">about me</h1>
        </div>

        <div className="mt-15">
          <div className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw] flex flex-col gap-2">
            <h1>football,</h1>
            <h1>Exploring,</h1>
            <h1>gaming,</h1>
            <h1>music.</h1>
          </div>
        </div>

        <div className="mt-12">
          <p className="w-90 text-xl font-ppneune-medium">
            My hobbies take up a good portion of my leisure time. I'm either cheering up FC Bayern Munich, winning a game of FIFA with them, exploring VR experiences or listening to delightful music.
          </p>
        </div>

        <div className="mt-12">
          <p className="mt-8 text-xl font-ppneune-medium underline underline-offset-[30px] decoration-1">
              More about me
            </p>
        </div>
      </section>

      {/* CONTACT Section */}
      <section className="mt-48">
        <div className="text-xl font-ppneune-medium flex gap-30">
          <h1>04/</h1>
          <h1 className="w-40 uppercase">want to work together?</h1>
        </div>

        <div className="mt-15">
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[12dvw] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-4 decoration-4 w-60">Connect with me</h1>
        </div>
      </section>

      {/* FOOTER Section */}
      <section className="mt-32 text-xl font-ppneune-medium leading-[1.1]">
        <div>
          <h1>Vishal Mishra</h1>
          <h1>Creative Developer</h1>
        </div>
        <div className="mt-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin,</a>&nbsp;
          <a href="http://" target="_blank" rel="noopener noreferrer">Github,</a>&nbsp;
          <a href="http://" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        </div>
        <div className="mt-10 mb-5">
          <h1>Development Vishal Mishra</h1>
          <h1>Inspiration <a href="https://www.richardekwonye.com/" target="_blank" rel="noopener noreferrer">Richard Ekwonye</a></h1>  
        </div>
      </section>
    </main>
  );
};

export default Hero;
