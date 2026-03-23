import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScrollProvider from "./components/LenisScrollProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vishal Mishra | Freelance Web Developer | React.js, Next.js, Node.js",
  description:
    "Vishal Mishra — Freelance Web Developer specializing in React.js, Next.js, and Node.js. I build high-performance, responsive, and scalable web applications using the MERN stack. Explore my projects, skills, and freelance work in modern web development, SEO Optimisation, Deployment and Domain & Hosting Management",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
    "Modern UI/UX",
    "Landing Page",
    "Portfolio Website",
    "Website developer Mumbai",
    "Freelance Website developer Mumbai",
    "Freelance web-app developer Mumbai",
  ],
  authors: [{ name: "Vishal Mishra", url: "https://mishravishal.in" }],
  creator: "Vishal Mishra",
  publisher: "Vishal Mishra",
  openGraph: {
    title: "Vishal Mishra | Freelance Web Developer",
    description:
      "I’m Vishal Mishra, a Freelance Web Developer skilled in React.js, Next.js, and Node.js. Explore my portfolio, projects, and freelance web development work.",
    url: "https://mishravishal.in",
    siteName: "Vishal Mishra Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/82864194?v=4", // update this with your actual preview image URL
        width: 1200,
        height: 630,
        alt: "Vishal Mishra — Freelance Web Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Mishra | Freelance Web Developer",
    description:
      "Freelance Developer specializing in React.js, Next.js, and Node.js. Building high-performance and scalable web apps using the MERN stack.",
    creator: "@CleverCoder0",
    images: ["https://avatars.githubusercontent.com/u/82864194?v=4"],
  },
  metadataBase: new URL("https://mishravishal.in"),
  alternates: {
    canonical: "https://mishravishal.in",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WBDP57SGE8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WBDP57SGE8');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <LenisScrollProvider>{children}</LenisScrollProvider>
        <SpeedInsights />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishal Mishra",
              url: "https://mishravishal.in",
              sameAs: [
                "https://github.com/CleverCoder03",
                "https://www.linkedin.com/in/clever-coder/",
                "https://x.com/CleverCoder0",
                "https://www.instagram.com/clevercoder_/",
              ],
              jobTitle: "Freelance Website Developer",
              worksFor: {
                "@type": "Organization, small business",
                name: "Freelance",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
