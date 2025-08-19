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
// import Platform from "../platform/page";
import PebCallP from "../../Components/PebCallP"
// import Pebfooter from "../pebfooter/page";
import PebFooterP from "../..//Components/PebFooterP";
import Pebheader from "../../Components/Pebheader";


export default function Menupage() {
    interface FAQ {
  question: string;
  answer: string;
}
const areas = [
  {
    id: 1,
    title: "Prefabricated",
    subtitle: "Prefabricated Multi-Storey Building Manufacturer",
    description:
      "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Warehouse",
    subtitle: "Warehouse",
    description:
      "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions to meet industrial and commercial demands.",
   image: "/expertise/third.png",
  },
  {
    id: 3,
    title: "Industrial Shed",
    subtitle: "Prefabricated Industrial Shed Manufacturers",
    description:
      "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
    image: "/expertise/third.png",
  },
  {
    id: 4,
    title: "Factory Building",
    subtitle: "Factory Building Solutions",
    description:
      "Our factory buildings are designed to provide a safe, efficient, and scalable infrastructure for manufacturing operations across multiple sectors.",
    image: "/expertise/third.png",
  },
  {
    id: 5,
    title: "Industrial Enclosures",
    subtitle: "Industrial Enclosures",
    description:
      "We deliver customized industrial enclosures that ensure safety, reliability, and protection of equipment while optimizing operational performance.",
    image: "/expertise/third.png",
  },
  {
    id: 6,
    title: "Cold Storage",
    subtitle: "Cold Storage & Cold Room Manufacturer",
    description:
      "Our advanced cold storage and cold room solutions are engineered to maintain precise temperatures, ensuring freshness and quality for perishable goods.",
    image: "/expertise/third.png",
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
    question: "How long does it take to construct a prefabricated factory building?",
    answer:
      "Construction time depends on the size and complexity but is generally much faster than traditional methods."
  }
];
const possibilities = [ 
  {
    subtitle: "Quick Installation & Lightweight Construction",
    description:
      "Pre-engineered buildings (PEBs) allow for fast installation and easy erection due to their lightweight construction, reducing both time and labor costs.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Low Maintenance",
    description:
      "With superior materials and a meticulous manufacturing process, PEB structures are low-maintenance and built to last, offering durability with minimal upkeep.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Resistance to Corrosive Elements",
    description:
      "PEBs are resistant to corrosive elements and can withstand severe weather conditions, including high winds, ensuring longevity and structural integrity.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Energy Efficiency & Weatherproofing",
    description:
      "Insulated walls and facades make these buildings energy-efficient and weather-resistant, providing comfortable living or working environments in adverse weather conditions.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Aesthetic Flexibility",
    description:
      "PEBs offer a variety of finishing options that enhance their aesthetic appeal, making them suitable for diverse applications and architectural preferences.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Customizable Design & Layouts",
    description:
      "The flexibility of design and construction enables a wide range of layout possibilities, catering to specific client requirements, whether for industrial or commercial use.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Safety Features",
    description:
      "Pre-engineered buildings can easily accommodate safety and comfort features such as smoke detectors, firefighting equipment, and air conditioning units.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Ideal for Off-Site & Site Construction",
    description:
      "These buildings are widely used for construction sites and off-site projects, providing a quick, durable solution for setting up accommodation or infrastructure.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Expertise & Innovation",
    description:
      "With decades of expertise, Landsking Infra Pvt. Ltd. has delivered innovative, high-performance prefabricated solutions across India, combining reliability with modern design.",
    image: "/industry.jpg",
  },
];const features = [
    {
      title: "Custom-Built Design",
      description:
        "Fully tailored to your operational and architectural requirements, ensuring precision and efficiency.",
      icon: <FaCogs className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Quick Installation",
      description:
        "Factory-engineered components allow rapid onsite assembly, saving both time and labor costs.",
      icon: <FaTools className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Cost-Efficient Construction",
      description:
        "Optimized designs reduce material waste and overall construction expenses.",
      icon: <FaBolt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Durable and Low Maintenance",
      description:
        "Built to withstand harsh weather and seismic conditions with minimal upkeep.",
      icon: <FaShieldAlt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Efficient",
      description:
        "Insulated wall and roof panels provide excellent temperature control and energy savings.",
      icon: <FaLeaf className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Expandable & Flexible",
      description:
        "Easily scalable and adaptable to meet future growth and business requirements.",
      icon: <FaExpand className="text-[#000080]text-3xl mb-4" />,
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
      title: "Prefabricated Multi-Storey Building Manufacturer",
      link: "#",
    },
    {
       image: "/expertise/third.png",
      title: "Industrial Enclosures",
      link: "#",
    },
    {
     image: "/expertise/third.png",
      title: "Cold Storage & Cold Room Manufacturer",
      link: "#",
    },
    {
     image: "/expertise/third.png",
      title: "Factory Building",
      link: "#",
    },
     {
     image: "/expertise/third.png",
      title:"Warehouse",
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
           Pre Engineered Buildings
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Pre-Engineered Buildings (PEBs) are modern steel structures designed, fabricated, and assembled using standardized components for faster construction.
          </p>
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
Smart Construction. Faster Delivery. Reliable Performance        </h2>
          <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed">
           Landsking Infra Pvt. Ltd. is one of India’s leading manufacturers of Pre-Engineered Buildings (PEBs), delivering complete solutions for industrial, commercial, and institutional structures. Our buildings are designed with advanced engineering and prefabrication technology, ensuring faster project delivery, cost efficiency, and customized designs for diverse applications.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            What is a Pre-Engineered Building? <span className="font-bold">Landsking Infra pvt.ltd</span> A Pre-Engineered Building (PEB) is a steel structure based on a structural framework of primary framing (columns and rafters), secondary framing (purlins and girts), along with roof and wall sheeting, and other components. All parts are pre-fabricated in factories and assembled on-site, drastically reducing construction time compared to conventional methods.
          </p>

        

          <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
            GET A QUOTE
          </button>
        </div>
<div className="flex justify-center">
          <img
  src="/industry.jpg"
  alt="EPACK Prefab Industrial Building"
  className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
/>

        </div>

      </div>
    </section>
    {/* end description */}
    {/* keyfetaure */}
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Key Features of{" "}
          <span className="text-[#000080]">Landsking Infra Pvt. Ltd. PEB Structures</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our Pre-Engineered Buildings are designed with innovation, durability,
          and efficiency at the core—providing solutions that meet modern
          industrial and commercial needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* explore conettt */}
     <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
       Pre Engineered Products
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
                  : "hover:bg-blue-800 text-gray-300"
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
               <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
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
   
    {/* capiablites */}
     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
          <img
            src="/PEB.jpg" // replace with your real factory image
            alt="Manufacturing Facility"
            width={700}
            height={450}
            className="relative rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <div className="flex items-center mb-4">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Manufacturing Capabilities
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Landsking Infra Pvt. Ltd.</strong> operates a modern,
            fully-integrated PEB manufacturing facility where every stage—
            from design and fabrication to finishing and dispatch—takes place
            under one roof. This seamless process ensures superior quality,
            faster delivery, and reliable performance.
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
            With strict quality checks at every stage—from automated
            fabrication to final assembly—we ensure that all components meet
            global industry standards. Whether it s a standard warehouse,
            factory building, or a customized industrial project,{" "}
            <strong>Landsking Infra Pvt. Ltd.</strong> provides dependable,
            cost-effective, and timely{" "}
            <span className="font-semibold">PEB solutions across India.</span>
          </p>
        </div>
      </div>
    </section>
    {/* endcapill */}
    {/* business benifts */}
     <section className="bg-[#272727] text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
             Benefits of Pre-Engineered Buildings
            </h2>
    
            {/* Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cardsToShow.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                   
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    
                    <p className="text-sm text-gray-300 font-semibold mb-2 md:text-xl">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Navigation Buttons Below */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevSlide}
                className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
              >
                <ChevronRight className="w-6 h-6 text-white" />
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
          SPECIFICATIONS OF INDUSTRIAL SHED COMPONENTS
          <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <ul className=" list-disc space-y-4 text-gray-700 text-base leading-relaxed">
            <li>
              <span className="font-bold">Wall:</span> PUF / EPS insulated sandwich
              panels of 50 / 60mm with PPGI sheet on both sides.
            </li>
            <li>
              <span className="font-bold">Roof:</span> PUF / EPS insulated sandwich
              panels of 30 / 40 mm or PPGI roofing sheets.
            </li>
            <li>
              <span className="font-bold">Doors:</span> Insulated doors with all
              accessories will be provided from our manufacturing setup.
            </li>
            <li>
              <span className="font-bold">Windows:</span> Aluminum anodized sliding
              windows will be provided from our manufacturing setup.
            </li>
            <li>
              <span className="font-bold">Structure and Accessories:</span> All
              required supporting accessories and structures will be provided before
              project delivery.
            </li>
            <li>
              <span className="font-bold">Electrical fittings, sanitary fittings,
              beds, etc.,</span> will be provided as per client requirements and
              fitted as per the contract.
            </li>
          </ul>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
            <img
              src="/industry.jpg"
              alt="PUF panels in industrial shed"
              width={600}
              height={400}
              className="rounded-md shadow-md relative z-20"
            />
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
     <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        {/* Yellow divider line */}
        <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
      </div>

      {/* FAQ Items */}
      <div className="border-t border-gray-200">
        {faqs.map((faq: FAQ, index: number) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span
                className={`font-medium transition-colors duration-200 ${
                  openIndex === index ? "text-[#000080]" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>
              <span className="text-gray-500 text-sm">
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
