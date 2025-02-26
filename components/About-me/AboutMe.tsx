"use client";

import { CSSProperties, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HighlightedText from "./HighlightedText";

const paraStyles : CSSProperties = {
  overflow: "hidden",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

export default function AboutMe() {

  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">About Me</h3>
      <p style={IsOpen ? undefined : paraStyles}>👋 Hey there! I&apos;m a passionate problem solver who thrives on building innovative software and exploring new technologies. I’ve participated in multiple hackathons, crafting solutions that tackle real-world challenges. What excites me the most is scaling existing tech—understanding how large systems operate and pushing their limits fascinates me. <br /><br />

      I love diving deep into the fundamentals of technology, often recreating core protocols like <HighlightedText text="HTTP" />, <HighlightedText text="SMTP" />, and <HighlightedText text="DNS" /> servers to truly grasp how they work. My primary tech stack revolves around <HighlightedText text="TypeScript" /> and <HighlightedText text="JavaScript" />, but I&apos;m also expanding my knowledge with <HighlightedText text="GoLang" /> and <HighlightedText text="Ruby" />, two of my favorite languages to work in. I enjoy working with deep tech like Docker and Redis, and I’m actively learning about Web3 and decentralized applications.<br /><br />

      One of my strengths is debugging and optimizing software—I have a knack for identifying bottlenecks and improving performance. While I haven&apos;t contributed to open source yet, it&apos;s something I&apos;m eager to dive into.<br /><br />

      Currently, I’m working on a projects while sharpening my Golang skills. Ultimately, I aspire to be a full-stack developer, specializing in backend and DevOps, with a keen interest in decentralized systems.<br /><br />

      🚀 Always open to learning, building, and scaling!</p>
      <div className="w-full flex justify-center items-center">
        <button onClick={() => {
          setIsOpen(!IsOpen);
          console.log(IsOpen);
        }} className="flex items-center text-sm my-3 mx-auto px-4 py-2 rounded-md font-bold text-gray-900 dark:text-gray-100 gap-1 cursor-pointer">
          {IsOpen ? "See Less" : "See All"}
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  )
}