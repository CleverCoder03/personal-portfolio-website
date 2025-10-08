import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScrollProvider from "./components/LenisScrollProvider";
import AnimatePresenceWrapper from "./components/AnimatePresenceWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vishal Mishra | Full-Stack Web Developer | React.js, Next.js, Node.js",
  description:
    "Vishal Mishra — Full-Stack Web Developer specializing in React.js, Next.js, and Node.js. I build high-performance, responsive, and scalable web applications using the MERN stack. Explore my projects, skills, and freelance work in modern web development, AI integration, and networking.",
  keywords: [
    "Vishal Mishra",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "GSAP Animation",
    "Framer Motion",
    "MERN Stack Developer",
    "TailwindCSS",
    "Git & Github",
    "Freelance Web Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "JavaScript Developer",
    "Web Development",
    "Freelance Projects",
    "AI Integration",
    "Networking",
  ],
  authors: [{ name: "Vishal Mishra", url: "https://vishalmishra.vercel.app" }],
  creator: "Vishal Mishra",
  publisher: "Vishal Mishra",
  openGraph: {
    title: "Vishal Mishra | Full-Stack Web Developer",
    description:
      "I’m Vishal Mishra, a Full-Stack Web Developer skilled in React.js, Next.js, and Node.js. Explore my portfolio, projects, and freelance web development work.",
    url: "https://vishalmishra.vercel.app",
    siteName: "Vishal Mishra Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/82864194?v=4", // update this with your actual preview image URL
        width: 1200,
        height: 630,
        alt: "Vishal Mishra — Full-Stack Web Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Mishra | Full-Stack Web Developer",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, and Node.js. Building high-performance and scalable web apps using the MERN stack.",
    creator: "@CleverCoder0", // optional — add if you have a Twitter handle
    images: ["https://avatars.githubusercontent.com/u/82864194?v=4"],
  },
  metadataBase: new URL("https://vishalmishra.vercel.app"),
  alternates: {
    canonical: "https://vishalmishra.vercel.app",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
