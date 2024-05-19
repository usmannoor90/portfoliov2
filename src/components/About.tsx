import React from "react";
import { BsCloudFog } from "react-icons/bs";
import { TbCloudComputing } from "react-icons/tb";
import { VscTerminalPowershell } from "react-icons/vsc";

function About() {
  return (
    <div>
      <section
        className=" bg-[#d3d3d380] [&>*]:text-[rgba(24,23,23,1)] pt-[10rem] sm:pb-[20rem] pb-[10rem]    "
        id="about"
      >
        <div className="grid grid-cols-1 px-4  max-w-[1000px] mx-auto  ">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-center  text-4xl font-bold  ">
              Hi, I’m Usman. Nice to meet you.
            </h1>
            <h2 className=" text-center text-md font-normal ">
              Back In 2021, I made the switch from nuts and bolts as a freshly
              graduated Mechanical Engineer to weaving digital wonders in the
              realm of web development. My inaugural year with React was all
              about creating web designs that could make pixels jealous. The
              sequel brought a new role—designing API implementations and diving
              into the magic of Next.js. Meanwhile, I traded my mechanical
              toolbox for Node.js and Express to sculpt robust end-to-end
              solutions. Oh, and did I mention? My coding adventures now unfold
              in the intriguing domain of cryptocurrency. Beyond the keyboard,
              I’m the carpenter who can code and the gym enthusiast who can
              debug.
            </h2>
          </div>
        </div>
      </section>

      <section className="  sm:mt-[-10rem] mt-[-3rem]  px-4 ">
        <div className=" bg-[rgba(24,23,23,1)] grid lg:grid-cols-2 max-w-[1000px] gap-8 border-[1px] border-solid border-[#d3d3d391] p-6 mx-auto rounded-2xl [&>*]:text-[#d3d3d3] shadow-2xl  ">
          <div className="flex flex-col py-6 px-6 gap-4 [&>*]:text-center ">
            <div className=" mx-auto rounded-full bg-[#d3d3d380] p-4  ">
              <VscTerminalPowershell color="rgba(24,23,23,1)" size={40} />
            </div>
            <h1 className=" text-[1.5rem] font-semibold  ">
              My Development Stack
            </h1>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <p className=" text-[1.25rem] font-semibold mt-4 ">
              Languages I speak:
            </p>
            <div className=" flex items-center justify-center flex-wrap gap-1 text-[14px] ">
              HTML, CSS , Git, JavaScript, TypeScript
            </div>
            <p className="text-[1.25rem] font-semibold mt-4">Dev Tools:</p>
            <div className=" flex items-start justify-center gap-8 ">
              <ul className=" [&>*]:!text-left  ">
                <li>React</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Vercel</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
                <li>VS Code</li>
              </ul>
              <ul className=" [&>*]:!text-left  ">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoBD</li>
                <li>mysql</li>
                <li>MS SQL</li>
                <li>postgresql</li>
                <li>AI</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col py-6 px-6 gap-4 [&>*]:text-center ">
            <div className=" mx-auto rounded-full bg-[#d3d3d380] p-4   ">
              <TbCloudComputing color="rgba(24,23,23,1)" size={40} />
            </div>
            <h1 className=" text-[1.5rem] font-semibold  ">Cloud Developer</h1>
            <p>
              I like to deliver projects to the audience for the fastest and
              most efficient experience.
            </p>
            <p className=" text-[1.25rem] font-semibold mt-4 ">
              Plateforms I use:
            </p>
            <div className=" flex items-center justify-center flex-wrap gap-1 text-[14px] ">
              DockerHub, Linux, AWS, GitHub, GitLab
            </div>
            <p className="text-[1.25rem] font-semibold mt-4">
              Cloud Technologies:
            </p>
            <ul>
              <li>Docker</li>
              {/* <li>Terraform</li> */}
              <li>CI Pipeline</li>
              <li>nginx</li>
              <li>AWS</li>
              <li>Git</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
