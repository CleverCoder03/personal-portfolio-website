import React from "react";
import Work from "../(landingPage)/Work";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Image from "next/image";

const WorkPage = () => {
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

      <Work />
      <div>
        <Project />
      <div className="lg:flex lg:items-start lg:mt-20">
        <div className="mt-25 lg:w-1/2 lg:mt-0 sticky top-20 lg:top-25">
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[1.15] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-6 decoration-4 w-50">
            <a href="https://senpai.web.app" target="_blank" rel="noopener noreferrer">
              The OG Labs
            </a>
          </h1>
          <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
            A portfolio website i made for practice
          </p>
        </div>

        <div className="lg:w-1/2">
          <a href="https://senpai.web.app" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-[45dvh] lg:h-[100dvh]">
              <Image
                src="/zodius-cover.jpg"
                alt="zodius-cover"
                className="object-cover"
                fill
              />
            </div>
          </a>
        </div>
      </div>
      </div>
      <section className="mt-48">
        <div className="text-xl font-ppneune-medium flex gap-30 lg:justify-between">
          <h1>02/</h1>
          <h1 className="w-40 uppercase">want to work together?</h1>
          <h1 className="uppercase hidden lg:block lg:w-30">
            Send me a message
          </h1>
        </div>
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default WorkPage;
