// components/ServicesAccordion.jsx

"use client";

import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

// 1. Define your services data
const servicesData = [
  {
    id: 1,
    title: "Front end development / engineering",
    description: "I plan, design, build, test and maintain scalable front end web applications."
  },
  {
    id: 2,
    title: "Interaction design / animation",
    description: "I specialize in creating fluid and engaging user experiences with meaningful animations and micro-interactions."
  },
  {
    id: 3,
    title: "Creative implementation",
    description: "Bridging the gap between static design and a living product. I bring creative visions to life with pixel-perfect attention to detail."
  }
];

// 2. Create the main Accordion component
export default function ServicesAccordion() {
  // State to keep track of the currently open item.
  // We default to '1' (the ID of the first item) to have it open by default, like your image.
  const [openId, setOpenId] = useState(servicesData[0].id);

  const handleToggle = (id) => {
    // Set the new openId. If it's already open, close it (set to null).
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 bg-gray-100 text-black">
      {/* You can change bg-gray-100 to match your site's background */}
      
      <h1 className="text-6xl md:text-8xl font-sans font-bold mb-6 tracking-tighter">
        SERVICES
      </h1>
      
      <div className="border-t border-black">
        {servicesData.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

// 3. Create the individual AccordionItem component
function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);

  // useLayoutEffect is preferred for animations that measure/mutate the DOM
  // It runs synchronously after all DOM mutations but before the browser paints.
  useLayoutEffect(() => {
    // Animate the height
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.5,
      ease: "power3.inOut",
      // We also animate padding for a cleaner look
      paddingTop: isOpen ? "1rem" : "0rem", // Corresponds to pt-4
      paddingBottom: isOpen ? "1.5rem" : "0rem" // Corresponds to pb-6
    });
  }, [isOpen]);

  return (
    <div className="border-b border-black">
      {/* Header / Trigger */}
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-2xl md:text-3xl font-sans">
          {item.title}
        </span>
        <span className="text-3xl md:text-4xl font-light">
          {isOpen ? '—' : '+'}
        </span>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden text-lg font-sans"
        // Set initial state without animation for the default open item
        style={{ height: isOpen ? 'auto' : 0, paddingTop: 0, paddingBottom: 0 }}
      >
        {/* The content itself */}
        <p>
          {item.description}
        </p>
      </div>
    </div>
  );
}