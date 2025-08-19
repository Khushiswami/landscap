"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaTools, FaBolt, FaShieldAlt, FaLeaf, FaCogs, FaExpand } from "react-icons/fa";
import { FaAward, FaGlobeAsia, FaDraftingCompass, FaCertificate, FaClock, FaProjectDiagram } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PebCallP from "../../Components/PebCallP"
import Pebheader from "../../Components/Pebheader";
import PebFooterP from "../../Components/PebFooterP";

import Link from "next/link";

export default function Modular() {
    interface FAQ {
  question: string;
  answer: string;
}
const areas = [
  {
    id: 1,
    title: "Prefab Site Infrastructure ",
    subtitle: "Prefab Site Infrastructure Solutions",
    description:"At Landsking Infra Pvt. Ltd, we provide comprehensive Prefab Site Infrastructure Solutions designed to meet the evolving needs of modern industries and organizations. Our solutions are engineered to deliver efficiency, durability, and sustainability, ensuring that infrastructure development is completed in significantly reduced timelines without compromising on quality.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Prefab Site Office",
    subtitle: "Prefab Site Office",
    description:"At Landsking Infra Pvt. Ltd, we design and deliver durable and functional Labor Hutments that provide safe, comfortable, and cost-effective accommodation for workforce requirements across construction sites, industrial projects, and remote locations.",
   image: "/expertise/third.png",
  },
  {
    id: 3,
    title: "Labor Hutments",
    subtitle: "Prefabricated Industrial Shed Manufacturers",
    description:
      "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
    image: "/expertise/third.png",
  },
  {
    id: 4,
    title: "Portable Security Guard Cabins",
    subtitle: "FPortable Security Guard Cabins",
    description:"Portable Security Guard Cabins are compact, movable structures designed to provide a safe, comfortable, and functional workspace for security personnel. Built with durable materials such as steel, aluminum, or high-quality insulated panels, these cabins are weather-resistant and sturdy, ensuring long-lasting use in both indoor and outdoor environments.",
    image: "/expertise/third.png",
  },
  {
    id: 5,
    title: "Clean Room",
    subtitle: "Clean Room",
    description:
"offers advanced cleanroom solutions for controlled environments in industries like pharmaceuticals, electronics, and biotechnology. Our cleanrooms are designed with precision to meet stringent hygiene, airflow, and temperature control standards, ensuring optimal conditions for sensitive operations."  ,
  image: "/expertise/third.png",
  },
  {
    id: 6,
    title: "Prefabricated Toilet",
    subtitle: "Prefabricated Toilet",
    description:"Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
    image: "/expertise/third.png",
  },
    {
    id: 7,
    title: "Prefab Porta Cabins Manufacturer",
    subtitle: "Prefab Porta Cabins Manufacturer",
    description:"Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
    image: "/expertise/third.png",
  },
    {
    id: 8,
    title: "Railway Shelters",
    subtitle: "Railway Shelters",
    description:"Landsking Infra Pvt. Ltd. delivers robust and reliable railway and telecom shelters, specially designed to perform in harsh outdoor conditions. Manufactured using premium-grade materials, these shelters ensure maximum safety, durability, and functionality for critical applications",
    image: "/expertise/third.png",
  },
  {
    id: 9,
    title: "Cold Storage & Cold Room Manufacturer",
    subtitle: "Railway Shelters",
    description:"Our cold storage facilities are designed using high-performance insulated panels and modern refrigeration technology to deliver superior energy efficiency. Suitable for a wide range of applications — from perishable goods to pharmaceuticals —  Landsking Infra Pvt. Ltd. ensures reliable preservation, consistent temperature control, and compliance with industry standards.",
    image: "/product/Cold Storage ps.jpg",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is a factory building?",
    answer:
      "A factory building is a structure designed to house manufacturing or production operations."
  },
  {
    question: "What materials are used in factory building construction?",
    answer:
      "Factory buildings are typically constructed using steel, prefabricated panels, reinforced concrete, and insulated materials for durability and efficiency."
  },
  {
    question: "What are the benefits of prefabricated factory buildings?",
    answer:
      "They are faster to build, cost-effective, customizable, and more sustainable."
  },
  {
    question:
      "How does a pre-engineered factory building differ from traditional buildings?",
    answer:
      "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost."
  },
  {
    question: "Can factory buildings be customized?",
    answer:
      "Yes, they can be tailored to specific design, size, and operational requirements."
  },
  {
    question: "What are Pre-Engineered Buildings (PEBs)?",
    answer:
      "Pre-Engineered Buildings are factory-fabricated steel structures that are shipped in parts and assembled on-site, offering speed, durability, and cost savings."
  },
  {
    question: "Why choose Pre-Engineered Buildings over conventional construction?",
    answer:
      "PEBs reduce construction time by up to 60%, offer flexibility in design, and ensure long-term strength with minimal maintenance compared to traditional methods."
  },
  {
    question: "What are Prefabricated Structures?",
    answer:
      "Prefabricated structures are modular buildings manufactured in factories and assembled at site, ensuring faster delivery, reduced labor, and consistent quality."
  },
  {
    question: "What is Light Gauge Steel Framing (LGSF)?",
    answer:
      "LGSF is an advanced construction method using cold-formed steel sections for walls, roofs, and floors, making structures lightweight, durable, and sustainable."
  },
  {
    question: "Where is Light Gauge Steel Framing used?",
    answer:
      "LGSF is commonly used in residential buildings, commercial complexes, schools, hospitals, and temporary housing solutions."
  },
  {
    question: "What are Sandwich Panels in construction?",
    answer:
      "Sandwich Panels are prefabricated wall and roof panels with an insulating core between two metal sheets, offering excellent thermal efficiency and durability."
  },
  {
    question: "What are the benefits of Sandwich Panels?",
    answer:
      "They provide superior insulation, reduce energy costs, are lightweight, easy to install, and suitable for cold storage, industrial sheds, and modular units."
  },
  {
    question: "What are Standard Modular Solutions?",
    answer:
      "Standard Modular Solutions are ready-to-use prefabricated units designed for quick installation, flexibility, and cost-effectiveness across industries."
  },
  {
    question: "What are Ready-to-Use Modular Units?",
    answer:
      "Ready-to-use modular units are pre-built cabins or structures delivered directly to the site, requiring minimal setup and providing instant usability."
  },
  {
    question: "Where can Ready-to-Use Modular Units be applied?",
    answer:
      "They are ideal for site offices, security cabins, classrooms, healthcare units, toilets, and temporary accommodations."
  }
];


const possibilities = [
  {
    subtitle: "High Tolerance & Durability",
    description:
      "Engineered with high tolerance, corrosion resistance, and exceptional durability to ensure reliable long-term performance.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Dimensional Accuracy",
    description:
      "Precision manufacturing guarantees exact dimensional accuracy, ensuring the final product meets and exceeds client expectations.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Quick Erection & Installation",
    description:
      "Designed for rapid erection, enabling swift installation even in complex or challenging site conditions.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Thermal Efficiency",
    description:
      "Insulated panels maintain a 5–7°C temperature difference, significantly enhancing energy efficiency and comfort.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Accelerated Project Timelines",
    description:
      "Optimized production and installation processes ensure timely delivery, meeting tight project schedules.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Robust Construction",
    description:
      "Strong and sturdy construction ensures long service life, structural stability, and reliable performance.",
    image: "/industry.jpg",
  },
];

const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };

  // Slice visible cards and wrap around if needed
  const cardsToShow = possibilities
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      startIndex + visibleCards > possibilities.length
        ? possibilities.slice(
            0,
            (startIndex + visibleCards) % possibilities.length
          )
        : []
    );
const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);
   const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Structure",
      link: "#",
    },
    
     {
     image: "/expertise/third.png",
      title:"Labor Hutment",
      link: "#",
    },
    {
     image: "/expertise/third.png",
      title:"Control Room",
      link: "#",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { label: "Years of Expertise", value: 20, suffix: "+", icon: <FaAward className="text-[#000080] text-xl" /> },
    { label: "Projects Delivered", value: 500, suffix: "+", icon: <FaProjectDiagram className="text-[#000080] text-xl" /> },
    { label: "Nationwide Presence", value: 25, suffix: "+ States", icon: <FaGlobeAsia className="text-[#000080] text-xl" /> },
    { label: "Certified Processes", value: 100, suffix: "%", icon: <FaCertificate className="text-[#000080] text-xl" /> },
  ];

  
  return (
    <>
    <Pebheader/>
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
           Prefabricated Structures
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
Prefabricated structures are buildings or components manufactured in a factory and then transported to the site for quick assemblly.          </p>
        </div>

        {/* Right Slider */}
        <div className="w-full relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="pb-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[250px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{slide.title}</h3>
                    <a
                      href={slide.link}
                      className="mt-3 inline-block text-[#000080] hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            {/* <div className="swiper-button-prev !text-white !top-1/2 !-translate-y-1/2 !left-0"></div>
            <div className="swiper-button-next !text-white !top-1/2 !-translate-y-1/2 !right-0"></div> */}
          </Swiper>
        </div>
      </div>
     
    </section>
    {/* description */}
      <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
Smart and Flexible Solutions for Modern Building       </h2>
          <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed">
Lightweight, durable, relocatable, economical, and energy-efficient, prefabricated structures are increasingly recognized as a modern and sustainable alternative to conventional construction methods. These innovative solutions meet all the functional requirements of traditional buildings while offering added advantages such as faster execution, cost savings, and design flexibility.          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
At Landsking Infra Pvt. Ltd, we specialize in delivering high-quality prefabricated structures tailored to diverse applications. Our dry construction process enables quicker project timelines and greater efficiency. Manufactured with premium-grade steel frames and insulated panels, our modular solutions are engineered for long-lasting durability and ease of installation.          </p>

        

          <Link href="/contact">
      <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
        GET A QUOTE
      </button>
    </Link>
        </div>
<div className="flex justify-center">
        <img
  src="/industry.jpg"
  alt="EPACK Prefab Industrial Building"
  className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
/>


        </div>

      </div>
    </section>
    {/* end description */}
   {/* capiablites */}
     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
          <img
            src="/PEB.jpg" // replace with your real factory image
            alt="Manufacturing Facility"
            width={700}
            height={450}
  className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <div className="flex items-center mb-4">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Redefining Modern Infrastructure with Prefabricated Buildings
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Landsking Infra Pvt. Ltd.</strong> we believe that the true value of prefabricated buildings lies in their innovative design, structural integrity, and flawless execution. Each project begins with a carefully engineered design, which is then integrated into advanced automated production systems to ensure precision, uniformity, and uncompromised quality.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our infrastructure is powered by a highly skilled team of
            engineers, supported with state-of-the-art CNC machinery, robotic
            welding systems, and high-capacity fabrication tools. These
            advanced resources enable us to deliver large-scale{" "}
            <span className="font-semibold">steel structures</span> with
            precision and efficiency.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our prefabricated structures are pre-engineered and pre-assembled at the factory, reducing on-site work and ensuring quick, seamless installation. This approach delivers not only efficiency and durability, but also an elegant balance of aesthetics and functionality, making them ideal for a wide range of residential, commercial, and industrial applications
          </p>
          <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
        GET A QUOTE
      </button>
        </div>
      </div>
    </section>
    {/* endcapill */}
    {/* explore conettt */}
     <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
       Our Range of Prefabricated Structure Products
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="bg-blue-900 text-white rounded-lg flex flex-col w-full md:w-1/4">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setSelectedId(area.id)}
              className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                selectedId === area.id
                  ? "bg-blue-800 font-bold"
                  : "hover:bg-blue-800 text-white"
              }`}
            >
              <span className="text-sm opacity-70">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{area.title}</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        {selectedArea && (
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
            {/* Text Content */}
            <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5">{selectedArea.description}</p>
              <button className="border border-[#000080] px-4 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors w-auto md:w-36">
  GET A QUOTE
</button>

            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
    {/* explore content */}
   
    
    {/* business benifts */}
     <section className="bg-[#000080] text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
             Benefits of Pre-Engineered Buildings
            </h2>
    
            {/* Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {cardsToShow.map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={item.image}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-black font-semibold mb-2 md:text-xl">
          {item.subtitle}
        </p>
        <p className="text-sm text-black">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    
            {/* Navigation Buttons Below */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevSlide}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
              >
                <ChevronLeft className="w-6 h-6 text-[#000080]" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
              >
                <ChevronRight className="w-6 h-6 text-[#000080]" />
              </button>
            </div>
          </div>
        </section>
    {/* benefits end */}
    {/* special section */}
     <section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
      Accelerate Construction with Prefabrication – Save Up to 60% Time
      <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image Section (Left Side) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
        <img
          src="/industry.jpg"
          alt="PUF panels in industrial shed"
          width={600}
          height={400}
         className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"

        />
      </div>

      {/* Text Section (Right Side) */}
      <div>
        <p className="text-gray-700 leading-relaxed">
          With advanced prefabrication technology, <b>Landsking Infra Pvt. Ltd.</b> helps you build smarter and faster. Our modern, fully automated production systems ensure precision, consistency, and reduced dependency on manual labor, making prefabrication up to <b>60% quicker</b> than conventional construction methods.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          By cutting down construction timelines, our prefabricated solutions not only <b>speed up project delivery</b> but also guarantee <b>strength, durability, and long-term reliability</b>. This makes them the preferred choice for a wide range of projects, including <b>commercial spaces, industrial facilities, residential complexes, and institutional buildings</b>.
        </p>
      </div>
    </div>
  </div>
</section>

    {/* end special section */}
    {/* why choose us */}
<section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
           
            Why Choose Landsking Infra Pvt. Ltd for PEBs?
          </h2>

          <p>25+ Years of Expertise in prefabricated and steel building solutions

Nationwide Presence with a strong logistics and project execution network

In-House Design & Engineering powered by 3D modeling and load optimization

Certified Manufacturing Standards ensuring compliance with IS codes and quality benchmarks

Timely Project Delivery backed by structured planning and skilled professionals

End-to-End Turnkey Solutions covering design, fabrication, delivery, and installation</p>

          {/* Animated Counters */}
    <div
  ref={ref}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
>
  {stats.map((stat, i) => (
    <div
      key={i}
      className="flex flex-col items-center bg-white shadow-lg p-3 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-blue-600 text-base">{stat.icon}</div>
      <h3 className="text-base font-extrabold text-gray-900 mt-2">
        {inView && (
          <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
        )}
      </h3>
      <p className="text-[14px] text-gray-600 mt-1 text-center">{stat.label}</p>
    </div>
  ))}
</div>

        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
          <img
            src="/industry.jpg" // replace with your image
            alt="Why Choose Us"
            width={700}
            height={450}
            className="relative rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
    {/* end why choose us */}
     <PebCallP/>
    
     {/* faqs */}
<section className="max-w-7xl mx-auto px-4 py-12 ">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        {/* Yellow divider line */}
        <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
      </div>

      {/* FAQ Items */}
      <div className="border-t border-gray-200 ">
        {faqs.map((faq: FAQ, index: number) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span
                className={`font-medium font-bold transition-colors duration-200 ${
                  openIndex === index ? "text-[#000080]" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>
              <span className="text-gray-500 text-sm font-bold">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
     {/* end faqs */}
    
     <PebFooterP/>
    </>
  );
}
