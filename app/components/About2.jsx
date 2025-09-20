import Link from "next/link";
import React from "react";

const About2 = () => {
  return (
    <section className="mt-48 lg:flex lg:justify-between">
      <div className="text-xl font-ppneune-medium flex gap-30">
        <h1>03/</h1>
        <h1 className="uppercase lg:hidden">about me</h1>
      </div>

      <div>
        <div className="mt-15 lg:mt-0">
          <div className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[8dvw] lg:leading-[7.8dvw] flex flex-col gap-2">
            <h1>football,</h1>
            <h1>Exploring,</h1>
            <h1>gaming,</h1>
            <h1>music.</h1>
          </div>
        </div>

        <div className="w-full lg:flex lg:justify-between lg:items-end">
          <div className="mt-12">
            <p className="w-[75vw] lg:w-[25vw] text-xl font-ppneune-medium">
              My hobbies take up a good portion of my leisure time. I'm either
              cheering up FC Bayern Munich, winning a game of FIFA with them,
              exploring VR experiences or listening to delightful music.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/about">
              <p className="mt-8 text-xl font-ppneune-medium underline underline-offset-[30px] decoration-1 lg:mb-5">
                More about me
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className="uppercase hidden lg:block text-xl font-ppneune-medium">
          about me
        </h1>
      </div>
    </section>
  );
};

export default About2;
