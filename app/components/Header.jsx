import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header