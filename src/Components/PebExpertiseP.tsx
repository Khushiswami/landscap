"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight } from "lucide-react";

type Slide = {
  id: number;
  location?: string;
  title: string;
  desc: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Pre Engineered Buildings",
    desc: "Customized steel structures designed for quick assembly and durability, ideal for warehouses, factories, and commercial spaces.",
    image: "expertise/firstexpertise.png",
  },
  {
    id: 2,
    title: "Prefabricated Structures",
    desc: "Modular buildings constructed off-site for applications like site offices, classrooms, and healthcare facilities.",
    image: "expertise/second.png",
  },
  {
    id: 3,
    title: "Light Gauge Steel Framing",
    desc: "Lightweight steel structures suitable for residential and commercial buildings, offering design flexibility and rapid construction.",
    image: "expertise/third.png",
  },
  {
    id: 4,
    title: "Sandwich Panels",
    desc: "Insulated panels used for walls and roofs, providing thermal efficiency and structural strength.",
    image: "expertise/fourth.png",
  },
  {
    id: 5,
    title: "Standard Modular Solutions",
    desc: "Ready-to-use modular units like porta cabins and liftable cabins for immediate deployment.",
    image: "expertise/fifth.png",
  },
];

export default function PebExpertiseP() {
  return (
    <div className="max-w-[1400px] mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-4xl font-bold text-[#000080] leading-snug">
          Explore Our Comprehensive <br className="hidden sm:block" />
          Prefabricated Building Solutions
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

       {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-xl overflow-hidden shadow-lg group h-[500px]">
              {/* Image with zoom effect */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 transition-all duration-500 opacity-100 group-hover:bg-black/60">
                {/* Description */}
                <p className="text-white text-sm opacity-0 translate-y-4 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-300 mb-2">
                  {slide.desc}
                </p>

                {/* Title + Arrow */}
                <div className="flex items-center justify-between">
                  <div>
                    {slide.location && (
                      <span className="text-yellow-400 text-xs font-semibold tracking-wide block">
                        {slide.location}
                      </span>
                    )}
                    <h3 className="text-white text-lg font-bold">
                      {slide.title}
                    </h3>
                  </div>

                  {/* Rotating arrow */}
                  <div className="w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center shrink-0 transform transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <button className="custom-prev bg-[#000080] rounded-full w-12 h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ‹
        </button>
        <button className="custom-next bg-[#000080] rounded-full w-12 h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ›
        </button>
      </div>
    </div>
  );
}
