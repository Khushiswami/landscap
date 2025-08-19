import React from "react";
import Image from "next/image";
import Pebheader from "../../Components/Pebheader";
import PedFooterP from "../../Components/PebFooterP";

const PrefabSiteOffice = () => {
  return (
    <>
      <div>
        <Pebheader />

        {/* Hero Section */}
        <section className="w-full min-h-[500px] flex flex-col md:flex-row">
          {/* Left Column */}
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/industry.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Prefabricated Multi-Storey Building Manufacturer
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-16">

          {/* Row 1 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/Menuimges/multi 1.png"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Prefab Multi-Storey Buildings by Landsking Infra
              </h3>
              <p className="text-gray-700 mb-4">
                At Landsking Infra, we excel in crafting innovative prefabricated multi-storey
                structures that offer unmatched durability, rapid construction, and eco-friendly
                solutions. With over 20 years of industry experience and advanced production
                facilities, we provide end-to-end turnkey solutions customized to suit your
                specific requirements—whether for commercial, institutional, or residential
                applications.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Prefab Multi-Storey Buildings?
              </h3>
              <p className="text-gray-700 mb-4">
                🚀 Accelerated Build Time - Structural elements are prefabricated off-site and
                swiftly assembled at the destination, cutting construction time by up to 50%
                compared to traditional building methods.
              </p>
              <p className="text-gray-700 mb-4">
                💰 Economical Solution - Efficient designs, reduced material waste, and quicker
                project turnaround help bring down total project costs—without sacrificing quality.
              </p>
              <p className="text-gray-700 mb-4">
                🏢 Enhanced Design Versatility - Our buildings offer adaptable layouts, meet varied
                load-bearing needs, and can be easily expanded in the future—perfect for evolving
                commercial and institutional spaces.
              </p>
              <p className="text-gray-700 mb-4">
                🌍 Eco-Conscious Construction - Off-site manufacturing leads to less on-site
                disruption, reduced material wastage, and a smaller environmental impact.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/Menuimges/multi 2.jpg"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Prefab Multi-Storey Buildings for Multipurpose Applications
            </h2>
            <p className="text-gray-700 text-lg">
              EPACK Prefab delivers cutting-edge and dependable multi-storey prefabricated buildings tailored for a variety of uses—including office hubs, commercial centers, and institutional infrastructures. Constructed using advanced PUF/EPS insulated panels and Light Gauge Steel Framing (LGSF) technology, our buildings offer excellent durability, thermal efficiency, and quick on-site assembly.
              <br /><br />
              Each structure is meticulously designed to meet vital engineering standards, including earthquake resistance (seismic compliance), wind load management, and optimal load-bearing capacity. At EPACK, we manage the entire process in-house—from architectural design and manufacturing to complete on-site erection—providing a true turnkey experience.
              <br /><br />
              Our prefab multi-storey solutions are especially suitable for sites with space constraints or time-sensitive schedules. By combining Pre-Engineered Building (PEB) systems with LGSF frameworks, we ensure enhanced strength and structural integrity. In addition, fire-rated coatings are applied to meet high safety benchmarks.
              <br /><br />
              Backed by 20+ years of industry experience, EPACK Prefab is a trusted partner for fast, cost-effective, and long-lasting multi-storey building solutions across India.
            </p>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/Menuimges/multi 3.jpeg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Applications of Prefab Multi-Storey Structures
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>🏥 Healthcare Facilities</li>
                <li>🏢 Corporate Office Buildings</li>
                <li>🏫 Schools & Educational Institutes</li>
                <li>🏨 Hostels & Hotels</li>
                <li>🏬 Retail & Shopping Complexes</li>
                <li>🏘️ Residential Apartments</li>
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Capabilities</h3>
              <p className="text-gray-700 mb-4">
                With an annual production capacity exceeding 133,924 metric tons, EPACK Prefab is
                fully equipped to execute large-scale and technically demanding prefab construction
                projects across India. Our offerings align with global quality standards and are
                fully customizable to suit specific project needs, including:
              </p>
              <ul className="space-y-1">
                <li>G+1, G+2, and multi-level building configurations</li>
                <li>Seismic-resilient construction for enhanced safety</li>
                <li>Custom load-bearing designs based on functional demands</li>
                <li>Seamless integration of HVAC and MEP systems</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/Menuimges/row4.jpg"
                alt="Row 4"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/Menuimges/row5.jpg"
                alt="Row 5"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why EPACK Prefab?</h3>
              <ul className="space-y-1">
                <li>✔️ Trusted Expertise Since 1999</li>
                <li>✔️ Comprehensive Turnkey Project Solutions</li>
                <li>✔️ Pan-India Project Delivery & Implementation</li>
                <li>✔️ Fully Integrated Design & Manufacturing Capabilities</li>
                <li>✔️ Dedicated Commitment to Quality and On-Time Delivery</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is a prefab multi-storey building?",
                  answer:
                    "A prefab multi-storey building is a structure made from pre-engineered components manufactured off-site and assembled on-site. These buildings are faster to build and more cost-efficient than traditional RCC structures.",
                },
                {
                  question: "Are prefab buildings durable?",
                  answer:
                    "Yes. Our prefab buildings are designed to withstand seismic loads, adverse weather conditions, and daily usage for decades.",
                },
                {
                  question: "Can these buildings be customized?",
                  answer:
                    "Absolutely. EPACK Prefab offers complete customization based on size, layout, height, and interior specifications.",
                },
                {
                  question: "How long does it take to construct a prefab multi-storey building?",
                  answer:
                    "Depending on the project size, construction timelines can be reduced by up to 40-60% compared to traditional construction.",
                },
                {
                  question: "Where can I use these structures?",
                  answer:
                    "They’re ideal for hospitals, offices, schools, residential complexes, retail outlets, and more.",
                },
                {
                  question: "What are the benefits of using prefab multi-storey buildings?",
                  answer:
                    "Benefits include reduced construction time, cost-effectiveness, design flexibility, sustainability, and high-quality standards.",
                },
                {
                  question: "In which sectors can prefab multi-storey buildings be utilized?",
                  answer:
                    "They are suitable for various sectors, including commercial complexes, educational institutions, healthcare facilities, and residential apartments.",
                },
                {
                  question: "How does EPACK ensure the quality of its prefab buildings?",
                  answer:
                    "EPACK employs stringent quality control measures, advanced manufacturing techniques, and skilled professionals to deliver high-quality prefab structures.",
                },
                {
                  question: "Who is the best manufacturer of prefab multi-storey buildings in India?",
                  answer:
                    "EPACK Prefab is one of the leading manufacturers of prefab multi-storey buildings in India, known for innovative designs and superior quality.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-lg shadow p-4 cursor-pointer group"
                >
                  <summary className="flex justify-between items-center font-semibold text-lg list-none">
                    {faq.question}
                    <span className="transition-transform duration-300 group-open:rotate-90">
                      ▶
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
      <PedFooterP />
    </>
  );
};

export default PrefabSiteOffice;
