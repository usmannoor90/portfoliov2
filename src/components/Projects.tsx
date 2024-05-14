"use client";

import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function Projects() {
  const handleMouseEnter: React.MouseEventHandler<HTMLVideoElement> = (e) => {
    const vid = e.currentTarget as HTMLVideoElement;
    if (vid) {
      vid.muted = true;
      vid.play();
    }
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLVideoElement> = (e) => {
    const vid = e.currentTarget as HTMLVideoElement;
    if (vid) {
      vid.muted = false;
      vid.currentTime = 0;
      vid.pause();
    }
  };

  const contents = [
    {
      href: "",
      title: "Proejct 1",
      description: "Project 1 description",
      content: (
        <>
          <video
            // width={250}
            // height={250}
            className="  w-full h-full object-cover "
            controls={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src={"/videos/projectvideos (2).mp4"} type="video/mp4" />
          </video>
        </>
      ),
      tags: ["javascript", "typescript"],
    },
    {
      href: "",

      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <>
          <video
            // width={250}
            // height={250}
            className="  w-full h-full object-cover "
            controls={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src={"/videos/projectvideos (1).mp4"} type="video/mp4" />
          </video>
        </>
      ),
      tags: ["javascript", "typescript"],
    },
    {
      href: "",

      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <>
          <video
            // width={250}
            // height={250}
            className="  w-full h-full object-cover "
            controls={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src={"/videos/projectvideos (3).mp4"} type="video/mp4" />
          </video>
        </>
      ),
      tags: ["javascript", "typescript"],
    },
    {
      href: "",

      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <>
          <video
            // width={250}
            // height={250}
            className="  w-full h-full object-cover "
            controls={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src={"/videos/projectvideos (4).mp4"} type="video/mp4" />
          </video>
        </>
      ),
      tags: ["javascript", "typescript"],
    },
  ];

  return (
    <div className="  grid grid-cols-1 max-w-[1100px] mx-auto w-full relative ">
      <h1 className="text-left md:text-6xl text-2xl  font-bold text-[#d3d3d3] ">
        Projects:
      </h1>

      <div className="md:pt-[6rem] py-[1rem]">
        <StickyScroll contents={contents} />
      </div>
    </div>
  );
}

export default Projects;
