"use client";
import React, { useEffect, useState } from "react";
import poster from "../../public/videoposter.jpg";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  TfiFacebook,
  TfiGithub,
  TfiInstagram,
  TfiLinkedin,
  TfiTwitter,
} from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";

function VideoSection() {
  const [scrollOpacity, setScrollOpacity] = useState(1); // State to hold opacity value

  // Update opacity based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Adjust this value as needed

    // Calculate opacity based on scroll position
    const opacity = 1 - Math.min(1, scrollPosition / maxScroll);
    setScrollOpacity(opacity);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run on component mount and unmount

  return (
    <>
      <div
        className={`fixed z-[55] w-full flex items-start justify-between md:px-12  px-4 md:py-6 py-3 [transition:all_0.4s_ease]  ${
          scrollOpacity >= 0.1
            ? "bg-[rgba(24,23,23,0)]"
            : "bg-[rgba(24,23,23,0.5)] backdrop-filter backdrop-blur-3xl shadow-lg "
        }     `}
      >
        <Link
          href={""}
          className={`[transition:opacity_0.4s_ease] Starnight text-[2rem] text-[#D3D3D3]  ${
            scrollOpacity >= 0.1 ? "opacity-0" : "opacity-100"
          }     `}
        >
          M Usman Noor
        </Link>
        <div className="  items-center justify-center gap-10 sm:flex hidden  ">
          <Link href={""} className="text-[2rem] text-[#D3D3D3] Starnight ">
            About
          </Link>
          <Link href={""} className="text-[2rem] text-[#D3D3D3] Starnight ">
            Work
          </Link>
          <Link href={""} className="text-[2rem] text-[#D3D3D3] Starnight ">
            Projects
          </Link>
          <Link href={""} className="text-[2rem] text-[#D3D3D3] Starnight ">
            Contact
          </Link>
        </div>
      </div>
      <div
        className="flex items-center sm:justify-end  justify-center sm:gap-10 gap-5 group w-full fixed text-white bottom-8 md:right-10 sm:right-4 right-[50%] sm:translate-x-[0] translate-x-[50%] z-50 "
        style={{ opacity: scrollOpacity }}
      >
        <div className="flex items-center justify-center gap-6 [&>*]:text-white  ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            aria-label="Go To M Usman Noor Facebook Page"
            title="Facebook Page"
          >
            <TfiFacebook color="white" size={20} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            aria-label="Go To M Usman Noor Linkedin Page"
            title="Linkedin Page"
          >
            <TfiLinkedin color="white" size={20} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            aria-label="Go To M Usman Noor Github Page"
            title="Github Page"
          >
            <BsGithub color="white" size={20} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            aria-label="Go To M Usman Noor Instagram Page"
            title="Instagram Page"
          >
            <TfiInstagram color="white" size={20} />
          </a>
        </div>
        <Link
          className="flex gap-1 group   "
          style={{ opacity: scrollOpacity }}
          href={"/pdf/MUsmanResume.pdf"}
          download
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-bold capitalize">View Résumé</span>
          <MdOutlineArrowOutward className=" group-hover:rotate-45 translate-y-1 group-hover:translate-x-1  transition-[all_0.1s] ease-linear  " />
        </Link>
      </div>

      <main className="relative 2xl:min-h-screen min-h-[900px]  ">
        <div
          className=" fixed w-full h-full overflow-hidden [transition:opacity_0.4s_ease] "
          style={{ opacity: scrollOpacity }}
        >
          <div className=" absolute bg-[#000000] w-full h-full">
            <div className=" w-full h-full">
              <div className="absolute left-[0] top-[0] w-full h-full opacity-90  ">
                <video
                  loop
                  playsInline
                  autoPlay
                  muted
                  poster={poster.src}
                  className={`h-full object-cover  w-full   `}
                >
                  <source
                    src={"/videoback.mp4"}
                    type="video/mp4"
                    className=" w-full h-full block "
                  />
                </video>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="name Starnight text-[#D3D3D3] fixed  lg:text-[8rem] sm:text-[6rem] text-[3rem]   top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  ">
            M Usman Noor
          </div>
        </div>
      </main>
    </>
  );
}

export default VideoSection;
