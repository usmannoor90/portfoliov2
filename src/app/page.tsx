import Link from "next/link";
import VideoSection from "../components/VideoSection";
import About from "../components/About";
import Work from "../components/Work";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <VideoSection />
      <div className="w-full py-8 relative z-50  ">
        <div className=" max-w-[1400px] grid grid-cols-1 mx-auto px-6   ">
          <About />
          <Work />
          <Projects />
        </div>
      </div>
    </>
  );
}
