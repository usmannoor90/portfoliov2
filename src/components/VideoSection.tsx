"use client";
import React, { useEffect, useState } from "react";
import poster from "../../public/videoposter.jpg";
import Link from "next/link";

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
        className={`fixed z-[55] w-full flex items-start justify-between px-12 py-6  ${
          scrollOpacity >= 0.1
            ? "bg-[rgba(24,23,23,0)]"
            : "bg-[rgba(24,23,23,1)] shadow-lg "
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
        <div className=" flex items-center justify-center gap-10  ">
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
      <main className="relative min-h-[900px]  ">
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
          <div className="name Starnight text-[#D3D3D3] fixed  text-[8rem]   top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  ">
            M Usman Noor
          </div>
        </div>
      </main>
    </>
  );
}

export default VideoSection;
