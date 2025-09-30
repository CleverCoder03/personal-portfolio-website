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
  title: "Vishal Mishra - A simple dev",
  description:
    "A devloper, creator, engineer all inside a simple introvert guy, who just wants to make an impact on things he touches, feels, accepts and connect with.",
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
