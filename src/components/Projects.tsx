"use client";

import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function Projects() {
  return (
    <div className=" mt-[3rem] grid grid-cols-1 max-w-[1100px] mx-auto w-full relative ">
      <h1 className="text-left  text-4xl font-bold  ">Projects:</h1>
      <ParallaxProvider>
        <div className=" mt-[4rem] grid grid-cols-2 max-w-[1100px] mx-auto w-full gap-8">
          <Parallax speed={20}>
            <div className=" flex flex-col justify-center items-center gap-3 ">
              <div className="mt-0 mx-0 mb-[1.5em] relative cursor-pointer object-cover bg-[center_center] bg-no-repeat overflow-hidden px-8 py-[1.4rem] flex items-end rounded-[9px] before:content-[''] before:pointer-events-none before:block before:absolute before:bg-[radial-gradient(circle,_white_10%,_whitesmoke_11%,_whitesmoke_100%)] after:content-[''] after:pointer-events-none after:absolute after:opacity-30 after:bg-[linear-gradient(rgba(0,_0,_0,_0.1)_10%,_rgba(0,_0,_0,_0.78)_80%)] group ">
                <Image
                  src={""}
                  alt="/"
                  className="absolute object-cover !w-full !h-full !left-0 !top-0"
                />
                <div className="opacity-0 translate-y-[10%] [transition:opacity_300ms_ease-in-out_0s,_transform_300ms_ease-in-out_0s] group-hover:transform-none group-hover:opacity-100 ">
                  <h3 className=" text-[rgb(255,_255,_255)] font-extrabold text-lg ">
                    Codewonders Helpers
                  </h3>
                  <p className="!text-[rgb(213,_213,_213)]">
                    A Small Helpers Utility Functions For Javascript
                    Development.
                  </p>
                  <p className="flex flex-wrap !text-[rgb(213,_213,_213)]  [&>span]:bg-[rgb(105,_104,_105)] [&>span]:px-[10px] [&>span]:py-[4px] [&>span]:rounded-[50px] [&>span]:capitalize [&>span]:text-[11px]  [&>span]:text-[rgb(255,_255,_255)] [&>span]:font-medium mt-2 ">
                    <span className="block ">Javascript</span>
                    <span className="block ">Rollup</span>
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax speed={10}>
            <div className=" flex flex-col justify-center items-center gap-3 ">
              <div className="mt-0 mx-0 mb-[1.5em] relative cursor-pointer object-cover bg-[center_center] bg-no-repeat overflow-hidden px-8 py-[1.4rem] flex items-end rounded-[9px] before:content-[''] before:pointer-events-none before:block before:absolute before:bg-[radial-gradient(circle,_white_10%,_whitesmoke_11%,_whitesmoke_100%)] after:content-[''] after:pointer-events-none after:absolute after:opacity-30 after:bg-[linear-gradient(rgba(0,_0,_0,_0.1)_10%,_rgba(0,_0,_0,_0.78)_80%)] group ">
                <Image
                  src={""}
                  alt="/"
                  className="absolute object-cover !w-full !h-full !left-0 !top-0"
                />
                <div className="opacity-0 translate-y-[10%] [transition:opacity_300ms_ease-in-out_0s,_transform_300ms_ease-in-out_0s] group-hover:transform-none group-hover:opacity-100 ">
                  <h3 className=" text-[rgb(255,_255,_255)] font-extrabold text-lg ">
                    Codewonders Helpers
                  </h3>
                  <p className="!text-[rgb(213,_213,_213)]">
                    A Small Helpers Utility Functions For Javascript
                    Development.
                  </p>
                  <p className="flex flex-wrap !text-[rgb(213,_213,_213)]  [&>span]:bg-[rgb(105,_104,_105)] [&>span]:px-[10px] [&>span]:py-[4px] [&>span]:rounded-[50px] [&>span]:capitalize [&>span]:text-[11px]  [&>span]:text-[rgb(255,_255,_255)] [&>span]:font-medium mt-2 ">
                    <span className="block ">Javascript</span>
                    <span className="block ">Rollup</span>
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default Projects;
