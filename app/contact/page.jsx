import Contact from "../(landingPage)/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <main
      id="title"
      className="flex flex-col min-h-screen py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18 bg-black"
    >
      <div className="hidden w-full lg:flex justify-center text-xl font-ppneune-medium font-medium md:text-2xl">
        <div className="w-1/2 inline-flex relative left-[25vw]">
          <h1 className="w-40 leading-[1] text-white">Currently a Freelacer</h1>
        </div>
        <div className="w-1/2">
          <h1 className="w-40 leading-[1] text-white">Based in Mumbai, India</h1>
        </div>
      </div>
      <Contact />
      <Footer classname={"text-white !mt-0"} />
    </main>
  );
};

export default ContactPage;
