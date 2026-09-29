import React from "react";
import expoimg from "../assets/img/expo.jpg";
import card1 from "../assets/img/card1.jpg";
import card3 from "../assets/img/card3.jpg";
import video from "../assets/img/Video1.mp4";
import { ArrowRight } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./Footer";

function Partner() {
  return (
    <div className="bg-black w-full overflow-hidden py-8 px-4 pt-30 pb-50 sm:px-8 lg:px-16">
      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="relative w-full mb-40 rounded-2xl overflow-hidden bg-cover bg-center min-h-100 sm:min-h-125 md:min-h-150"
        style={{ backgroundImage: `url(${expoimg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-between h-full min-h-100 sm:min-h-125 md:min-h-150 p-6 sm:p-10 md:p-14">
          <p className="text-white text-sm sm:text-base font-semibold">
            Become an Acuity Partner
          </p>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl mt-20 sm:mt-32">
            We're more than a broker, we're a <br className="hidden md:block" />
            dedicated growth partner.
          </h1>

          <a
            href="#"
            className="text-white text-base sm:text-lg font-semibold flex items-center gap-2 hover:underline mt-20 sm:mt-32"
          >
            Explore partnerships <span>→</span>
          </a>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="grid grid-cols-1 sm:grid-cols-2 py-30 gap-4 sm:gap-6 text-white md:gap-12"
      >
        <div className=" bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 font-white p-5 sm:p-6 md:p-8 rounded-xl flex items-center justify-between">
          <span>Partner with us</span>
          <FaArrowRightLong />
        </div>
        <div className="bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 p-5 sm:p-6 md:p-8 rounded-xl flex items-center justify-between">
          <span>Why Acuity?</span>
          <FaArrowRightLong />
        </div>
        <div className="bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 p-5 sm:p-6 md:p-8 rounded-xl flex items-center justify-between">
          <span>Our partner</span>
          <FaArrowRightLong />
        </div>
        <div className="bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 p-5 sm:p-6 md:p-8 rounded-xl flex items-center justify-between">
          <span>Blog</span>
          <FaArrowRightLong />
        </div>
      </div>

      <div class="px-4 sm:px-8 lg:px-16 py-16 bg-black max-w-7xl mx-auto">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          class="flex flex-col sticky top-62.5 z-0 lg:flex-row items-start justify-between mb-20 gap-8"
        >
          <div class="flex flex-col justify-start w-full lg:w-5/12 pt-2">
            <span class="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-md w-fit mb-8">
              Markets
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Markets your network expects
            </h2>
          </div>
          <div class="w-full lg:w-6/12">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80"
              alt="Markets"
              class="w-full h-56 sm:h-64 lg:h-80 object-cover rounded-2xl mb-6"
            />
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Provide access to 800+ CFDs across global markets, world-class
              pricing and lightning-fast execution.
            </p>
            <a
              href="#"
              class="font-bold text-white flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base"
            >
              Learn more <span>→</span>
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          class="flex flex-col bg-black sticky top-62.5 z-1 lg:flex-row items-start justify-between mb-20 gap-8"
        >
          <div class="flex flex-col justify-start w-full lg:w-5/12 pt-2">
            <span class="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-md w-fit mb-8">
              Plateform
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Platforms built for traders
            </h2>
          </div>
          <div class="w-full lg:w-6/12">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Technology"
              class="w-full h-56 sm:h-64 lg:h-80 object-cover rounded-2xl mb-6"
            />
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              From MT4 and MT5 to TradingView and TradeLocker integration, offer
              platform choice supported by stability, charting tools and
              usability.
            </p>
            <a
              href="#"
              class="font-bold text-whita flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base"
            >
              Learn more <span>→</span>
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          class="flex flex-col bg-black sticky top-62.5 z-3 lg:flex-row items-start justify-between mb-20 gap-8"
        >
          <div class="flex flex-col justify-start w-full lg:w-5/12 pt-2">
            <span class="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-md w-fit mb-8">
              Knowledge Hub
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Support that scales with you
            </h2>
          </div>
          <div class="w-full lg:w-6/12">
            <img
              src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Payments"
              class="w-full h-56 sm:h-64 lg:h-80 object-cover rounded-2xl mb-6"
            />
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Access educational content, platform guidance and responsive
              customer support to help your network trade with greater
              understanding.
            </p>
            <a
              href="#"
              class="font-bold text-white flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base"
            >
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 text-white sm:grid-cols-2 gap-6 md:gap-8 pt-12 sm:pt-20 md:pt-30">
        <div className="pl-2 pt-5 text-xl sm:text-2xl font-bold border-t-2 border-gray-400">
          <span>Introducing Brokers (IBs)</span>
          <p className="mt-4 text-sm text-white sm:text-base font-normal">
            Build and manage your IB business with a partner that understands
            scale. Access competitive rebate structures of up to 50% of the
            brokerage fee, clear reporting and dedicated support. From
            co-branded campaigns to events and tailored resources, we help you
            support your clients effectively.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-6 sm:mt-10 rounded-md bg-linear-to-r from-orange-700 to-orange-500 px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Introducing Brokers (IBs)
          </button>
        </div>

        <div className="pl-2 pt-5 text-xl sm:text-2xl font-bold border-t-2 border-gray-400">
          <span>Affiliates</span>
          <p className="mt-4 text-sm  text-white sm:text-base font-normal">
            Build and manage your IB business with a partner that understands
            scale. Access competitive rebate structures of up to 50% of the
            brokerage fee, clear reporting and dedicated support. From
            co-branded campaigns to events and tailored resources, we help you
            support your clients effectively.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-6 sm:mt-10 rounded-md  bg-linear-to-r from-orange-700 to-orange-500 px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Affiliates
          </button>
        </div>

        <div className="pl-2 pt-5 text-xl sm:text-2xl font-bold border-t-2 border-gray-400">
          <span>Prop Affiliates</span>
          <p className="mt-4 text-sm text-white sm:text-base font-normal">
            Introduce your audience to Eightcap Challenges, our traditional
            phase and same-day prop challenges. Your referrals test their
            trading skills in a risk-free environment, while you earn
            commissions on each sale.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-6 sm:mt-10 rounded-md  bg-linear-to-r from-orange-700 to-orange-500  px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Prop Affiliates
          </button>
        </div>

        <div className="pl-2 pt-5 text-xl sm:text-2xl font-bold border-t-2 border-gray-400">
          <span>Influencers</span>
          <p className="mt-4 text-sm  text-white sm:text-base font-normal">
            Collaborate with a regulated CFD broker to introduce trading
            concepts responsibly. We provide tracking tools, marketing resources
            and commercial structures designed to align with your content and
            audience.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-6 sm:mt-10 rounded-md  bg-linear-to-r from-orange-700 to-orange-500  px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Influencers
          </button>
        </div>
      </div>
      <div className="bg-black  xl:pl-120  lg:pl-90 pt-16 sm:pt-24 sm:pl-80 md:pt-40 flex justify-center sm:justify-start"></div>

      <h1
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="pt-8 sm:pt-10 px-2 sm:px-6 md:px-10 lg:px-20 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-100 mb-6 text-center leading-tight wrap-break-words"
      >
        Built for growth. <br className="sm:hidden" />
        Built for you.
      </h1>

      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="grid grid-cols-1   pt-20 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8"
      >
        <div className=" flex-2 border-t-2 border-gray-200 ">
          <img
            src={card1}
            alt="Partners"
            className=" flex-2 mt-6 img- w-full sm:h-50 md:h-96 lg:h-130 object-cover rounded-xl mb-6 "
          />
          <span className="pl-2 pt-5 text-white text-xl sm:text-xl font-bold ">
            Business support
          </span>
          <p className="pt-5 pl-2 text-sm text-white sm:text-base font-normal">
            Work with a dedicated partner team and access competitive flexible
            commission models, high-converting marketing assets and clear,
            real-time reporting.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
          >
            Trader Support
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className=" flex-2 border-t-2 text-white border-gray-200 border-t-2-black   "
        >
          <img
            src={card3}
            alt="Partners"
            className=" flex-2 mt-6 img- w-full sm:h-50 md:h-96 lg:h-130 object-cover rounded-xl mb-6"
          />
          <span className="pl-2 pt-5 text-xl sm:text-xl font-bold ">
            Client Experieance
          </span>
          <p className="pt-5 pl-2 text-sm sm:text-base font-normal">
            Your network gains access to a global CFD broker regulated in
            multiple jurisdictions, competitive pricing, trusted platforms and
            responsive customer support.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
          >
            partner support
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
      <h1 className="pt- sm:pt-10 px-2 sm:px-6 md:px-10 text-white lg:px-20 text-xl sm:text-2xl md:text-5xl lg:text-7xl xl:text-6xl font-extrabold mb-12 mt-40  text-center leading-tight ">
        Reviews
      </h1>

      <div className="relative flex flex-col bg-black pb-40 gap-8 pt-12 px-5 sm:px-30">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="sticky bottom-24 z-3"
        >
          <div className="w-full space-y-4 sm:space-y-6 rounded-[20px] border border-gray-200 bg-gray-200 p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
            <span className="text-xl font-bold sm:text-2xl">
              Best Customer Support
            </span>
            <p className="text-sm font-normal text-gray-700 sm:text-base">
              The support team is responsive, knowledgeable, and helpful. Every
              query gets a clear explanation, and issues are resolved quickly.
              Really appreciate the professionalism.
            </p>
            <div className="mt-4 flex items-center gap-3 sm:mt-7">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white transition-all hover:bg-indigo-400 sm:h-12 sm:w-12 sm:text-base"
              >
                M
              </button>
              <p className="text-sm font-medium text-gray-900 sm:text-base">
                Dan
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="sticky bottom z-2"
        >
          <div className="w-full space-y-4 sm:space-y-6 rounded-[20px] border border-gray-200 bg-gray-200 p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
            <span className="text-xl font-bold sm:text-2xl">
              Highly Reliable and User-Friendly
            </span>
            <p className="text-sm font-normal text-gray-700 sm:text-base">
              I was impressed with the clean UI and intuitive layout. Everything
              is easy to navigate, and the learning curve is minimal. Great for
              anyone who wants a stress-free trading experience.
            </p>
            <div className="mt-4 flex items-center gap-3 sm:mt-7">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white transition-all hover:bg-indigo-400 sm:h-12 sm:w-12 sm:text-base"
              >
                T
              </button>
              <p className="text-sm font-medium text-gray-900 sm:text-base">
                Temba Bavuma
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="sticky bottom z-10"
        >
          <div className="w-full space-y-4 sm:space-y-6 rounded-[20px] border border-gray-200 bg-gray-200 p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
            <span className="text-xl font-bold sm:text-2xl">
              Excellent Trading Experience
            </span>
            <p className="text-sm font-normal text-gray-700 sm:text-base">
              The platform is smooth, fast, and reliable. Charting tools are
              accurate, and order execution feels instant. Overall, a solid
              choice for both beginners and experienced traders.
            </p>
            <div className="mt-4 flex items-center gap-3 sm:mt-7">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white transition-all hover:bg-indigo-400 sm:h-12 sm:w-12 sm:text-base"
              >
                M
              </button>
              <p className="text-sm font-medium text-gray-900 sm:text-base">
                Marry
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 sm:px-8 lg:px-16 py-4 bg-black max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row justify-between gap-12">
          <div class="w-full lg:w-5/12">
            <p class="text-gray-100 text-sm sm:text-base mb-6">
              How we support you and your network
            </p>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Your questions, answered
            </h2>
          </div>

          <div class="w-full lg:w-6/12 flex flex-col">
            <details class="border-b border-gray-200  open:px-4 open:mb-2" open>
              <summary class="py-5 flex items-center gap-4 cursor-pointer hover:opacity-70 transition list-none">
                <span class="text-xl font-light text-white group-open:hidden">
                  +
                </span>
                <span class="text-xl font-light text-white hidden group-open:inline">
                  −
                </span>
                <h3 class="font-bold text-white  text-base sm:text-lg">
                  How and when do I get paid?
                </h3>
              </summary>

              <p class="text-gray-100 text-sm sm:text-base pb-5 pl-9">
                Choose from commission structures aligned to your partner model.
                Payments are processed monthly and managed through the Partner
                Portal.
              </p>
            </details>

            <details class="border-b border-gray-200  open:px-4 open:mb-2">
              <summary class="py-5 flex items-center gap-4 cursor-pointer hover:opacity-70 transition list-none">
                <span class="text-xl font-light text-white group-open:hidden">
                  +
                </span>
                <span class="text-xl font-light text-white hidden group-open:inline">
                  −
                </span>
                <h3 class="font-bold text-white text-base sm:text-lg">
                  How do I track my performance?
                </h3>
              </summary>
              <p class="text-gray-100 text-sm sm:text-base pb-5 pl-9">
                Everything you need is in your Partner Portal. View referrals,
                conversions, campaigns and revenue, all in real time.
              </p>
            </details>

            <details class="border-b border-gray-200 open:px-4 open:mb-2">
              <summary class="py-5 flex items-center gap-4 cursor-pointer hover:opacity-70 transition list-none">
                <span class="text-xl font-light text-white group-open:hidden">
                  +
                </span>
                <span class="text-xl font-light  hidden text-white group-open:inline">
                  −
                </span>
                <h3 class="font-bold text-white text-base sm:text-lg">
                  What marketing support will I get?
                </h3>
              </summary>
              <p class="text-gray-100 text-sm sm:text-base pb-5 pl-9">
                We provide co-branded materials, campaign templates, digital
                assets, and dedicated marketing support to help you grow your
                business.
              </p>
            </details>

            <details class="border-b border-gray-200  open:px-4 open:mb-2">
              <summary class="py-5 flex items-center gap-4 cursor-pointer hover:opacity-70 transition list-none">
                <span class="text-xl font-light text-white group-open:hidden">
                  +
                </span>
                <span class="text-xl font-light hidden text-white group-open:inline">
                  −
                </span>
                <h3 class="font-bold text-white text-base sm:text-lg">
                  Are there any risks I should be aware of?
                </h3>
              </summary>
              <p class="text-gray-100 text-sm sm:text-base pb-5 pl-9">
                You'll get marketing support that actually performs. Access
                high-converting landing pages, campaigns and bespoke assets that
                help you connect with your audience year-round.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="relative py-32 mt-35  px-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-20 w-64 h-64 bg-sky-600 rotate-45"></div>
          <div className="absolute top-20 right-32 w-72 h-72 bg-sky-600 rotate-12"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-sky-600 rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-12">
            Platforms built for traders
            <br />
            investment today
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="border-2 border-white text-white font-semibold px-10 py-3 rounded-full  hover:bg-white hover:text-orange-500 transition"
            >
              Get in touch
            </a>

            <a
              href="#"
              className="border-2 border-white text-white font-semibold px-10 py-3 rounded-full  hover:bg-white hover:text-orange-500 transition"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Partner;
