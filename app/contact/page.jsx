import Contact from "../(landingPage)/Contact";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";

export const metadata = {
  title: "Contact Vishal Mishra | Hire Web Developer",
  description:
    "Get in touch with Vishal Mishra for freelance web development projects. Available for building modern, high-performance websites and UI experiences.",

  keywords: [
    "Hire Web Developer India",
    "Contact Vishal Mishra",
    "Freelance Developer Contact",
    "Website developer Mumbai",
    "Freelance Website developer Mumbai",
    "Freelance web-app developer Mumbai",
  ],
};

const ContactPage = () => {
  return (
    <main
      id="title"
      className="flex flex-col min-h-screen py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18 bg-black"
    >
      <HeaderTitle contact={true}/>
      <Contact />
      <Footer classname={"text-white !mt-0"} />
    </main>
  );
};

export default ContactPage;
