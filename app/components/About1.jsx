import Link from 'next/link'
import React from 'react'

const About1 = () => {
  return (
   <section className="mt-34 lg:flex gap-[20vw]">
           <div className="text-xl font-ppneune-medium">
             <h1>01/</h1>
           </div>
   
           <div className="lg:mt-[-2vw] lg:pr-15">
             <div>
               <div className="mt-7">
                 <p className="text-3xl uppercase font-ppneune-medium">
                   Passionate about web technologies. I love working at the
                   intersection of creativity and user friendly interfaces. I
                   create memorable web experiences.
                 </p>
               </div>
   
               <div className="mt-9">
                 <p className="text-3xl uppercase font-ppneune-medium">
                   When I'm not building or exploring new web experiences, I'm
                   probably playing games or watching football.
                 </p>
               </div>
             </div>
   
             <div className="lg:flex lg:w-full lg:gap-8 lg:mt-20">
               <p className="mt-12 text-xl font-ppneune-medium w-60 lg:w-[20vw]">
                 A blend of UI and product engineering.
               </p>
               <div className="lg:w-1/2 lg:pr-10">
                 <p className="mt-12 text-xl font-ppneune-medium ">
                   With a background in design, I work closely with design focused
                   teams to build websites and microsites for companies and
                   individuals. I have years of experience working and
                   collaborating on product teams and leading engineering efforts.
                 </p>
                 <p className="mt-8 text-xl font-ppneune-medium">
                   With my experience in UI and product engineering, I solve
                   product problems and build appealing usable web experiences.
                 </p>
                 <Link href={"/about"}>
                   <p className="mt-8 text-xl font-ppneune-medium underline underline-offset-[30px] decoration-1">
                   More about me and services
                 </p>
                 </Link>
               </div>
             </div>
           </div>
         </section>
  )
}

export default About1