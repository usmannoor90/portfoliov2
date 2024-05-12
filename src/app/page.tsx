import VideoSection from "../components/VideoSection";
import About from "../components/About";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <VideoSection />
      <div className="w-full pt-8 relative z-50  ">
        <div className=" max-w-[1400px] grid grid-cols-1 mx-auto    ">
          <About />
          <Work />
          <div className="px-4">
            <Projects />
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}
