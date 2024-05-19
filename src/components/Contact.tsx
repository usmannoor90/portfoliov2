import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { cn } from "../utils/cn";
import { Input } from "./ui/input";

function Contact() {
  return (
    <div id="contact">
      <div className=" w-full rounded-md bg-black  relative mt-[6rem] flex flex-col items-center justify-center   ">
        <div className="grid grid-cols-1 mx-auto  w-full gap-6   rounded-[20px] px-4 relative z-40  sm:py-[4rem] py-[1rem] ">
          <div className="  grid grid-cols-1 max-w-[1100px] mx-auto  w-full relative">
            <h1 className=" text-center  md:text-6xl text-2xl  font-bold text-[#d3d3d3] gap-4 ">
              Contact
            </h1>
            <article>
              <p className=" text-[#d3d3d3] mt-4 text-center">
                Get in touch or shoot me an email directly on{" "}
                <b>m.usmannoor90@gmail.com</b>
              </p>
            </article>
            <div className=" md:py-[5rem] pt-[8rem] max-w-[500px] mx-auto w-full grid grid-cols-1 gap-6 relative z-[523366] ">
              <form
                // method="POST"
                // action="https://formspree.io/adenekanwonderful41@gmail.com"
                className=" flex flex-col gap-4 w-full   "
              >
                <LabelInputContainer className="">
                  <Input id="fullname" placeholder="Full Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="">
                  <Input id="email" placeholder="Email" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="">
                  <Input
                    id="message"
                    placeholder="Message"
                    type="text"
                    className="  "
                  />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10  shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]  "
                  type="submit"
                >
                  Send Message &rarr;
                  <BottomGradient />
                </button>
              </form>
            </div>
          </div>

          <BackgroundBeams />
          <div className=" flex justify-end  ">
            <h4 className=" max-w-[500px] font-normal  text-[#CAC0B3] capitalize ">
              Loosely designed in{" "}
              <span className="text-white  font-semibold capitalize ">
                Figma
              </span>{" "}
              and coded in{" "}
              <span className="text-white  font-semibold capitalize ">
                Visual Studio Code{" "}
              </span>
              by yours truly. Built with{" "}
              <span className="text-white  font-semibold capitalize ">
                Next.js
              </span>{" "}
              and{" "}
              <span className="text-white  font-semibold capitalize ">
                Tailwind CSS
              </span>
              , deployed with Vercel. All text is set in the{" "}
              <span className="text-white  font-semibold capitalize ">
                Robot & Starnight
              </span>{" "}
              typeface.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#d3d3d37e] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
