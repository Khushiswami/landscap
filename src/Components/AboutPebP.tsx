"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Building2, Users, Layers, Home } from "lucide-react";

export default function AboutPebP() {
  const stats = [
    { value: 1.2e6, suffix: "+", label: "Sq. Ft. Area Delivered", icon: Home },
    { value: 200, suffix: "+", label: "Project Executed", icon: Building2 },
    { value: 55, suffix: "+", label: "Global Clients", icon: Users },
    { value: 7, suffix: "+", label: "Years Manufacturing Experience", icon: Layers },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !hasAnimated) {
          stats.forEach((stat, i) => {
            if (numberRefs.current[i]) {
              const countUp = new CountUp(numberRefs.current[i]!, stat.value, {
                duration: 2,
                suffix: stat.suffix,
                separator: ",",
              });
              countUp.start();
            }
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section className="relative py-20 px-5 md:px-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#000080] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#000080] opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Section - Video & Images */}
        <div className="space-y-6">
          <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-2xl shadow-lg border-4 border-[#000080] hover:border-blue-400 transition-all duration-500">
            <video
              src="/homeslider.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-44 overflow-hidden rounded-xl shadow-lg border-4 border-[#000080] transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
              <Image
                src="/new1.png"
                alt="Building 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-44 overflow-hidden rounded-xl shadow-lg border-4 border-[#000080] transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
              <Image
                src="/new2.png"
                alt="Building 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section - About Us */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000080] mb-6">
            ABOUT US
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed text-lg">
            LandsKingInfra Pvt.Ltd. with the Team Combined Experience have More than 120MT Capacity Rice
            mill Plant ,350 Minor and Major Bridge and Super Structure, 26 KM MS Pipe line upto 3.8m
            dia, and 410KM HDPE pipeline Excavation and laying , 6,76,000Sqft PEB Erection Work ,
            15.5MW solar plant in Its Portfolio .
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Landsking Infra is one of the India&apos;s Fastest Growing Company, Work on engineering,
            procurement, construction (EPC) and maintenance companies. Landsking Infra works with
            Clients in diverse industries around the world to design, construct and maintain their capital
            projects. With the aim of Working to create a cleaner, greener, safer world, Landsking Infra helps our
            customers deliver projects of purpose that create a lasting positive legacy. These are projects that
            create jobs and grow economies; improve the resiliency of the world&apos;s infrastructure; connect
            communities to resources and opportunity; get us closer to net zero; protect India and allied
            interests; tackle critical environmental challenges to protect people and the planet; and accelerate
            progress to make the world a cleaner, greener, safer place.
            While expertise enables delivery, partnerships ensure long-term success, which is why we align
            everything we do to our customers&apos; goals.
          </p>

          {/* Stats with Icons */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-3 bg-[#000080] rounded-full text-white shadow-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                      className="text-3xl md:text-4xl font-extrabold text-[#000080]"
                    >
                      0
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
