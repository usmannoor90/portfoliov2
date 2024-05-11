import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaLinux,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiGit, DiMongodb, DiMsqlServer } from "react-icons/di";
import { AiFillApi, AiTwotoneApi } from "react-icons/ai";

function Work() {
  return (
    <div className=" mt-[8rem] grid grid-cols-1 max-w-[1200px] mx-auto w-full relative  ">
      <h1 className="text-left  text-4xl font-bold  ">Work Experience:</h1>
      <div className=" md:pt-[5rem] pt-[3rem] pb-[8rem] grid md:grid-cols-2 max-w-[1200px] gap-12 mx-auto w-full h-full ">
        {/* for small screen */}
        <div className=" md:hidden block bg-black p-6 rounded-xl  ">
          <h3 className="  text-[14px]  text-[#cac0b3c0]">2022-Present</h3>
          <div className="flex w-full gap-1 items-center justify-start my-2">
            <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
              Full-Stack Engineer
            </h2>
            <h2 className=" sm:text-[14px] text-[12px] whitespace-nowrap  text-[#cac0b3c0]  ">
              ( CointBitSolutions )
            </h2>
            <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
          </div>
          <p className=" w-full  text-[#CAC0B3]  sm:text-[15px] text-[13px]  ">
            Successfully developed and deployed several web applications
            showcasing a deep understanding of user experience and modern design
            principles. Implemented Redux for state management, enhancing
            application responsiveness and user engagement. Proficiently
            integrated RESTful APIs to enable seamless data exchange between
            front-end and back-end systems.
          </p>

          <div className="flex gap-1 flex-wrap items-center mt-3 [&>span]:bg-[rgb(105,_104,_105)] [&>span]:px-[10px] [&>span]:py-[4px] [&>span]:rounded-[50px] [&>span]:capitalize [&>span]:text-[11px]  [&>span]:text-[rgb(255,_255,_255)] [&>span]:font-medium [&>span]:flex [&>span]:items-center [&>span]:gap-1 [&>span]:flex-nowrap  ">
            <span className="  ">
              html <FaHtml5 />
            </span>
            <span className="  ">
              css <FaCss3Alt />
            </span>
            <span className="  ">
              Javascript <IoLogoJavascript />
            </span>
            <span className="  ">
              typescript <SiTypescript />
            </span>
            <span className="  ">
              ReactJs <FaReact />
            </span>
            <span className="  ">
              NextJs <TbBrandNextjs />
            </span>
            <span className="   ">
              Node.Js/Express.Js <IoLogoJavascript />
            </span>
            <span className="   ">
              mysql <SiMysql />
            </span>
            <span className="   ">
              postgresql <BiLogoPostgresql />
            </span>
            <span className="   ">
              MS SQL <DiMsqlServer />
            </span>
            <span className="   ">
              MongoDB <DiMongodb />
            </span>
            <span className="   ">
              restful api <AiFillApi />
            </span>
            <span className="   ">
              Web Sockets <AiTwotoneApi />
            </span>
            <span className="   ">
              Docker <FaDocker />
            </span>
            <span className="   ">
              Git <DiGit />
            </span>
            <span className="   ">
              Linux <FaLinux />
            </span>
          </div>
        </div>
        {/* for small screen */}

        {/* for large screen */}

        <div className=" w-full relative md:block hidden h-full ">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
            className="p-4 xl:!w-[560px] lg:!w-[460px] h-full "
          >
            <div className=" xl:!w-[540px] lg:!w-[440px] h-full">
              <h3 className="  text-[14px]  text-[#cac0b3c0]">2021-2022</h3>
              <div className="flex w-full gap-1 items-center justify-start my-2">
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  React Developer
                </h2>
                <h2 className=" sm:text-[14px] text-[12px] whitespace-nowrap  text-[#cac0b3c0]  ">
                  ( CointBitSolutions )
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" w-full  text-[#CAC0B3]  sm:text-[15px] text-[13px]  ">
                Successfully developed and deployed several web applications
                showcasing a deep understanding of user experience and modern
                design principles. Implemented Redux for state management,
                enhancing application responsiveness and user engagement.
                Proficiently integrated RESTful APIs to enable seamless data
                exchange between front-end and back-end systems.
              </p>

              <div className="flex gap-1 flex-wrap items-center mt-3 [&>span]:bg-[rgb(105,_104,_105)] [&>span]:px-[10px] [&>span]:py-[4px] [&>span]:rounded-[50px] [&>span]:capitalize [&>span]:text-[11px]  [&>span]:text-[rgb(255,_255,_255)] [&>span]:font-medium [&>span]:flex [&>span]:items-center [&>span]:gap-1 [&>span]:flex-nowrap  ">
                <span className="  ">
                  html <FaHtml5 />
                </span>
                <span className="  ">
                  css <FaCss3Alt />
                </span>
                <span className="  ">
                  Javascript <IoLogoJavascript />
                </span>
                <span className="  ">
                  typescript <SiTypescript />
                </span>
                <span className="  ">
                  ReactJs <FaReact />
                </span>

                <span className="   ">
                  restful api <AiFillApi />
                </span>

                <span className="   ">
                  Git <DiGit />
                </span>
              </div>
            </div>
          </PinContainer>
        </div>
        <div className=" w-full relative md:block hidden h-full ">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
            className="p-4 xl:!w-[560px] lg:!w-[460px] h-full  "
          >
            <div className=" xl:!w-[540px] lg:!w-[440px] h-full  ">
              <h3 className="  text-[14px]  text-[#cac0b3c0]">2022-Present</h3>
              <div className="flex w-full gap-1 items-center justify-start my-2">
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  Full-Stack Engineer
                </h2>
                <h2 className=" sm:text-[14px] text-[12px] whitespace-nowrap  text-[#cac0b3c0]  ">
                  ( CointBitSolutions )
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" w-full  text-[#CAC0B3]  sm:text-[15px] text-[13px]  ">
                Successfully developed and deployed several web applications
                showcasing a deep understanding of user experience and modern
                design principles. Implemented Redux for state management,
                enhancing application responsiveness and user engagement.
                Proficiently integrated RESTful APIs to enable seamless data
                exchange between front-end and back-end systems.
              </p>

              <div className="flex gap-1 flex-wrap items-center mt-3   [&>span]:bg-[rgb(105,_104,_105)] [&>span]:px-[10px] [&>span]:py-[4px] [&>span]:rounded-[50px] [&>span]:capitalize [&>span]:text-[11px]  [&>span]:text-[rgb(255,_255,_255)] [&>span]:font-medium [&>span]:flex [&>span]:items-center [&>span]:gap-1 [&>span]:flex-nowrap    ">
                <span className="  ">
                  html <FaHtml5 />
                </span>
                <span className="  ">
                  css <FaCss3Alt />
                </span>
                <span className="  ">
                  Javascript <IoLogoJavascript />
                </span>
                <span className="  ">
                  typescript <SiTypescript />
                </span>
                <span className="  ">
                  ReactJs <FaReact />
                </span>
                <span className="  ">
                  NextJs <TbBrandNextjs />
                </span>
                <span className="   ">
                  Node.Js/Express.Js <IoLogoJavascript />
                </span>
                <span className="   ">
                  mysql <SiMysql />
                </span>
                <span className="   ">
                  postgresql <BiLogoPostgresql />
                </span>
                <span className="   ">
                  MS SQL <DiMsqlServer />
                </span>
                <span className="   ">
                  MongoDB <DiMongodb />
                </span>
                <span className="   ">
                  restful api <AiFillApi />
                </span>
                <span className="   ">
                  Web Sockets <AiTwotoneApi />
                </span>
                <span className="   ">
                  Docker <FaDocker />
                </span>
                <span className="   ">
                  Git <DiGit />
                </span>
                <span className="   ">
                  Linux <FaLinux />
                </span>
              </div>
            </div>
          </PinContainer>
        </div>
        {/* for large screen */}
      </div>
    </div>
  );
}

export default Work;
