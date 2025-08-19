"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function AboutP() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full min-h-[500px] flex flex-col md:flex-row">
      <div
        className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
        }}
      >
        <div className="max-w-lg text-white space-y-4 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug tracking-wide">
             LandsKingInfra Pvt.Ltd. with the Team Combined Experience have More than 120MT Capacity Rice
mill Plant ,350 Minor and Major Bridge and Super Structure, 26 KM MS Pipe line upto 3.8m
dia, and 410KM HDPE pipeline Excavation and laying , 6,76,000Sqft PEB Erection Work ,
15.5MW solar plant in Its Portfolio .
          </h1>
          <p className="text-sm md:text-lg leading-relaxed">
            LandsKingInfra Pvt.Ltd. with the Team Combined Experience have More than 120MT Capacity Rice
mill Plant ,350 Minor and Major Bridge and Super Structure, 26 KM MS Pipe line upto 3.8m
dia, and 410KM HDPE pipeline Excavation and laying , 6,76,000Sqft PEB Erection Work ,
15.5MW solar plant in Its Portfolio 
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="flex-1 relative flex items-center justify-center p-6 bg-cover bg-center"
        style={{
          backgroundImage: `url('/aboutleft.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(14,14,85,0.3)]"></div>

        <div className="relative w-full max-w-xl aspect-video z-10 flex flex-col items-center justify-center">
         <video
  ref={videoRef}
  className="w-full h-full rounded-lg shadow-lg"
  src="/video.mp4"
  muted
  loop
  playsInline
  poster="/about.png"
  onPlay={() => setIsPlaying(true)}
  controls={isPlaying} 
></video>


          {!isPlaying && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer px-4"
              onClick={handleVideoClick}
            >
              <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border-4 border-[rgb(0_0_0_/_44%)] rounded-full mb-4 hover:border-[rgb(0_0_0_/_60%)] transition">
                <FaPlay className="text-4xl md:text-6xl text-[rgb(0_0_0_/_44%)]" />
              </div>

              <h2 className="text-xl md:text-3xl font-bold leading-snug tracking-wide text-white text-center">
                CONNECTING VISIONS <br /> BUILDING FUTURE
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
