import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-[15vh] lg:mt-[30vh] lg:flex">
      <div className="text-xl font-ppneune-medium">01/</div>
      <div className="lg:ml-[12vw] lg:w-fit">
        <div className="mt-7 lg:mt-0">
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            Passionate
          </h1>
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            Creative
          </h1>
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            Developer
          </h1>
          <div className="relative w-[75vw] h-[40vh] my-4 lg:w-[45vw]">
            <Image
              src="/about-cover.jpg"
              className="object-cover"
              alt="About Cover"
              fill
            />
          </div>
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            Based in
          </h1>
          <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            Mumbai
          </h1>
        </div>

        <div className="mt-20 lg:mt-30 text-xl font-ppneune-medium lg:flex lg:justify-between">
          <h1 className="lg:w-[10vw] xl:w-[14vw]">A journey of curiosity and explorations</h1>
          <div className="lg:w-[22vw]">
            <p className="mt-12 lg:mt-0">
              I'm a creative developer with years of experience in building
              websites and appealing web-app experiences. I've collaborated with
              individuals and agencies to build experiences for their clients.
            </p>
            <p className="mt-8 lg:mt-10">
              Each project is an opportunity to learn new concepts across
              multiple domains including arts, maths and physics.
            </p>
            <div className="relative w-full sm:w-95 lg:w-full h-[50vh] overflow-hidden mix-blend-luminosity my-8 lg:my-15">
                <Image className="object-cover object-top align-middle scale-125" src="/about-profile-og.png" alt="about-profile" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
