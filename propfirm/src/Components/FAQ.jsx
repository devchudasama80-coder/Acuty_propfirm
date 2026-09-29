import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const FAQSection = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  return (
    <div className="bg-black  text-white py-25 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white to-gray-350 bg-clip-text text-transparent">
            FAQs
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Here are some of our most frequently asked questions. Contact us if
            you have a specific question that you would like us to answer.
          </p>
          <a
            href="mailto:info@acuitytrading.com"
            className="text-orange-300 hover:text-orange-400 font-semibold text-lg transition-colors"
          >
            info@acuitytrading.com
          </a>
        </div>

        <div className="lg:col-span-2 ">
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="border-b border-gray-700 pb-12 py-6 bg-black cursor-pointer sticky bottom-35 z-7"
            onClick={() => setOpen1(!open1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                How fast can we go live with Acuity?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open1 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open1 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Most brokers are live in days, not weeks. We confirm delivery
                method, branding, and compliance wording first, then support
                your team through setup so launch is straightforward.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="border-b border-gray-700 py-6 pb-12 bg-black cursor-pointer sticky bottom-35 z-6"
            onClick={() => setOpen2(!open2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                What does integration actually involve?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open2 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open2 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Integration is simple. Acuity can connect through an API or be
                embedded using an iframe, depending on how you want traders to
                access it. Your developers are not building anything from
                scratch, we provide the tools, documentation, and support.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="border-b border-gray-700 pb-12 bg-black py-6 cursor-pointer sticky bottom-35 z-5"
            onClick={() => setOpen3(!open3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                Where can traders access Acuity content?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open3 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open3 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Inside the trading platform, inside the broker client area, and
                through channels like email or Telegram. You choose where
                insight appears based on how your traders already engage.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="border-b border-gray-700 pb-12 py-6 cursor-pointer bg-black sticky bottom-35 z-4"
            onClick={() => setOpen4(!open4)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                Can we see a live example before we commit?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open4 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open4 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Yes. We can show a working preview and real examples of what
                traders see, including layouts, trade ideas, and updates. Book a
                demo to walk through it live.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="border-b border-gray-700 pb-12 py-6 cursor-pointer  bg-black sticky bottom-35 z-3"
            onClick={() => setOpen5(!open5)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                What makes Acuity trade ideas different?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open5 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open5 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Trade ideas are created by experienced analysts and supported by
                AI signals such as sentiment and news relevance. Each idea
                follows a clear, consistent format with rationale, levels, and
                ongoing updates.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="border-b border-gray-700 pb-12 py-6 cursor-pointer  bg-black sticky bottom-35 z-2"
            onClick={() => setOpen6(!open6)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                How often are trade ideas updated?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open6 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open6 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Trade ideas are created or updated every 10 minutes. AI
                continuously scans markets and news, while analysts refine and
                update ideas as conditions change, so traders always see current
                context.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="border-b border-gray-700 pb-12 py-6 cursor-pointer  bg-black sticky bottom-35 z-1"
            onClick={() => setOpen7(!open7)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4">
                Can we track content history and performance?
              </h3>
              <span className="text-orange-300 text-2xl shrink-0">
                {open7 ? <HiMinus /> : <HiPlus />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open7 ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed pr-8">
                Yes, we provide comprehensive analytics and reporting tools that
                allow you to track all content history, engagement metrics, and
                performance data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
