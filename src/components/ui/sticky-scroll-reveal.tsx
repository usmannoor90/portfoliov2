"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    tags?: string[];
    href: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md  nosrollbar "
      ref={ref}
    >
      <div className="div relative flex items-start px-4 ">
        <div className="max-w-lg">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-[rgb(255,_255,_255)] font-extrabold text-lg"
              >
                <Link
                  className="flex gap-1 group   "
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-bold capitalize"> {item.title}</span>
                  <MdOutlineArrowOutward className=" group-hover:rotate-45 translate-y-1 group-hover:translate-x-1  transition-[all_0.1s] ease-linear  " />
                </Link>
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="!text-[rgb(213,_213,_213)] mt-2"
              >
                {item.description}
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="flex flex-wrap gap-2  !text-[rgb(213,_213,_213)]  [&>span]:bg-[rgb(105,_104,_105)] [&>span]:px-[10px] [&>span]:py-[4px] [&>span]:rounded-[50px] [&>span]:capitalize [&>span]:text-[11px]  [&>span]:text-[rgb(255,_255,_255)] [&>span]:font-medium mt-4"
              >
                {item.tags?.map((value, ind) => (
                  <span key={ind} className="block ">
                    {value}
                  </span>
                ))}
              </motion.p>
            </div>
          ))}
          <div className=" md:h-40 sm:h-30  " />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
