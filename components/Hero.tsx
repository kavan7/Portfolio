"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
//@ts-ignore
import { LoopPingPong } from "three";
import Image from "next/image";
import { FocusCards } from "./ui/focus-cards";
import Link from "next/link";
const links = [
 

  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/kavan7",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/kavanabeyratne/",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/kavan.a1/",
  },
];


const cards = [
 
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
];


export function AuroraBackgroundDemo() {
  
  const [active, setActive] = useState('');
  return (
    <AuroraBackground>
  
      
       <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={links}
      />
     
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-5xl md:text-8xl md:mt-[150px] mt-[10px] font-bold text-white text-center">
          Hi, I'm <span className="text-[#315930] ">Kavan.</span>
        </div>
        <div className="font-extralight text-3xl text-neutral-200 py-4">
          And this, is my portfolio.
        </div>
        <div className="bottom xs:bottom-2 xs:top-39  w-full flex justify-center ">
  <motion.div
    animate={{
      y: [-40, -90, -40],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      //@ts-ignore
      repeatType: LoopPingPong,
    }}
    className="mt-[150px]"
  >
    <Link
      href="#education"
      className="flex items-center gap-2"
  
    >
      {/* Remove the hidden class */}
      <svg
        data-accordion-icon
        className="sm:block w-16 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </Link>
    <Link
      href="#education"
      className="flex items-center gap-2"
   scroll
    >
      <svg
        data-accordion-icon
        className=" w-16 rotate-180 shrink-53"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </Link>
  </motion.div>
</div>


      </motion.div>
    
    </AuroraBackground>
    
  );
}
