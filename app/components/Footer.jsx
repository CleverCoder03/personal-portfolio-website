import React from 'react'

const Footer = ({classname}) => {
  return (
    <section className={`mt-32 text-xl font-ppneune-medium leading-[1.1] lg:flex lg:justify-between lg:items-end lg:mt-[12rem] lg:mb-[3rem] ${classname}`}>
        <div>
          <h1>Vishal Mishra</h1>
          <h1>Creative Developer</h1>
        </div>
        <div className="mt-5 lg:mt-0">
          <a href="https://www.linkedin.com/in/clever-coder/" target="_blank" rel="noopener noreferrer">
            Linkedin,
          </a>
          &nbsp;
          <a href="https://github.com/CleverCoder03" target="_blank" rel="noopener noreferrer">
            Github,
          </a>
          &nbsp;
          <a href="https://wa.me/+917249084224" target="_blank" rel="noopener noreferrer">
            Whatsapp
          </a>
        </div>
        <div className="mt-10 mb-5 lg:mt-0 lg:mb-0">
          <h1>Development By</h1>
          <h1>Vishal Mishra</h1>
          {/* <h1>
            Inspiration{" "}
            <a
              href="https://www.richardekwonye.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richard Ekwonye
            </a>
          </h1> */}
        </div>
      </section>
  )
}

export default Footer