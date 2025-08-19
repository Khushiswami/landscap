"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    title: "Engineering",
    images: ["/about.png", "/about.png", "/about.png"],
    categoryType: "Design & Development",
    projectsCompleted: 120,
    experience: "10+ years",
    clientsServed: 50,
    status: "Ongoing",
    highlight: "High-quality, customized engineering solutions",
    description:
      "Engineering solutions cover the design, development, and optimization of systems. Advanced technologies and tools are used to create efficient systems, with innovation and quality considered at every stage. These solutions are customized and reliable for every project.",
  },
  {
    title: "Industry Installation",
    images: ["/about.png", "/about.png"],
    categoryType: "Industrial Setup",
    projectsCompleted: 85,
    experience: "8+ years",
    clientsServed: 40,
    status: "Completed",
    highlight: "Safe and efficient industrial installations",
    description:
      "Industrial machinery and systems are installed safely and efficiently. Experienced professionals ensure installation meets industry standards with minimal downtime. Tailored solutions ensure seamless and reliable performance.",
  },
  {
    title: "Environmental Services",
    images: ["/about.png", "/about.png"],
    categoryType: "Sustainability & Compliance",
    projectsCompleted: 60,
    experience: "7+ years",
    clientsServed: 30,
    status: "Ongoing",
    highlight: "Eco-friendly and sustainable solutions",
    description:
      "Comprehensive services are provided for environmental protection and sustainability. Services include waste management, pollution control, and implementation of eco-friendly practices. Compliance and green initiatives are prioritized for every project.",
  },
  {
    title: "Construction Management",
    images: ["/about.png", "/about.png"],
    categoryType: "Project Management",
    projectsCompleted: 50,
    experience: "12+ years",
    clientsServed: 25,
    status: "Ongoing",
    highlight: "Efficient project planning and execution",
    description:
      "Construction projects are managed efficiently through planning, coordination, and execution. Experts supervise budget, schedule, and quality control. Risk assessment and resource optimization ensure smooth project delivery.",
  },
  {
    title: "Solar Plant Installation",
    images: ["/about.png", "/about.png"],
    categoryType: "Renewable Energy",
    projectsCompleted: 40,
    experience: "6+ years",
    clientsServed: 20,
    status: "Completed",
    highlight: "Sustainable solar energy solutions",
    description:
      "Solar plants are designed and installed for renewable energy solutions. High-efficiency panels and technology are used to generate sustainable energy. Maintenance and monitoring ensure long-term energy savings and reliable performance.",
  },
];

export default function PebSlider() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="bg-gray-100 px-auto py-8 mt-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-4xl font-bold text-[#000080] leading-snug">
          Industrial Building We Build
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto my-8 px-4">
        <div className="flex flex-col md:flex-row w-full h-[500px] rounded-xl overflow-hidden">
          
          {/* Left Menu */}
          <div className="w-full md:w-1/4 bg-white flex flex-col rounded-tl-xl rounded-bl-xl border border-gray-300">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 p-6 text-left transition-all duration-300 hover:bg-gray-100 ${
                  activeCategory.title === cat.title
                    ? "bg-white font-semibold shadow-inner"
                    : ""
                } ${index !== categories.length - 1 ? "border-b border-gray-300" : ""}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Right Slider */}
          <div className="w-full md:w-3/4 relative">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-full h-full"
            >
              {activeCategory.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {/* Bottom Center Text Overlay */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                      <div className="bg-black/40 p-8 rounded-lg text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-3 text-center">{activeCategory.title}</h3>
                        <p className="text-sm mb-3 text-center">{activeCategory.description}</p>
                        {/* <p className="text-sm mb-1 text-center">
                          <strong>Projects:</strong> {activeCategory.projectsCompleted} | <strong>Experience:</strong> {activeCategory.experience} | <strong>Clients:</strong> {activeCategory.clientsServed}
                        </p>
                        <p className="text-sm mb-1 text-center"><strong>Status:</strong> {activeCategory.status}</p>
                        <p className="text-sm italic text-center">{activeCategory.highlight}</p> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
}
