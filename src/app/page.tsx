import Link from "next/link";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <>
      <VideoSection />
      <div className="w-full bg-red-300 py-8 px-6 relative z-50  ">
        <div className=" max-w-[1400px] grid grid-cols-1 mx-auto   "></div>
      </div>
    </>
  );
}
