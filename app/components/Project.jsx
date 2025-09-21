import Image from "next/image";

const projects = [
  {
    id: 1,
    imgSrc: "/zodius-cover.jpg",
    href: "https://zodius.vercel.app",
    name: "Zodius",
    desc: "A gaming like website with gsap creative web animation",
  },
  {
    id: 2,
    imgSrc: "/vector-cover.jpg",
    href: "https://vector-mojo.vercel.app",
    name: "Vector Mojo",
    desc: "A cockktail website with gsap creative web animation",
  },
];

const Project = () => {
  return (
    <div className="mt-22 lg:mt-30">
        {projects.map((project) => (
          <div key={project.id} className="lg:flex lg:items-start lg:mt-20">
            <div className="mt-25 lg:w-1/2 lg:mt-0 sticky top-20 lg:top-25">
              <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[1.15] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-6 decoration-4 w-50">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h1>
              <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
                {project.desc}
              </p>
            </div>

            <div className="lg:w-1/2">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-[45dvh] lg:h-[100dvh]">
                  <Image
                    src={project.imgSrc}
                    alt="zodius-cover"
                    className="object-cover"
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
