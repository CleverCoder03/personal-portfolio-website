import Image from "next/image";
import Copy from "./Copy";
import CharReveal from "./CharReveal";

const projects = [
  {
    id: 1,
    imgSrc: "/zodius-cover.jpg",
    href: "https://zodius.vercel.app",
    name: "Zodius",
    desc: "A web-app designed for gaming portfolio with loads of animation.",
  },
  {
    id: 2,
    imgSrc: "/vector-cover.jpg",
    href: "https://vector-mojo.vercel.app",
    name: "Vector Mojo",
    desc: "A web-app designed for introducing different drinks with cool animation.",
  },
];

const Project = () => {
  return (
    <div className="mt-22 lg:mt-30">
        {projects.map((project) => (
          <div key={project.id} className="lg:flex lg:items-start lg:mt-20">
            <div className="mt-25 lg:w-1/2 lg:mt-0 sticky top-20 lg:top-25">
              <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[1.15] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-6 decoration-4 lg:decoration-6 w-full">
                <CharReveal>
                  <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                </CharReveal>
              </h1>
              <Copy>
                <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
                {project.desc}
              </p>
              </Copy>
            </div>

            <div className="lg:w-1/2">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-[45dvh] lg:h-[100dvh] overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt="zodius-cover"
                    className="object-cover transition-all duration-200 hover:scale-110"
                    fill
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Project;
