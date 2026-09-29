import { ArrowUpRight, ArrowRight } from "lucide-react";
import ForexWidget from "./ForexWidgwt";
import video from "../assets/img/Video1.mp4";
import Footer from "./Footer";

function Indices() {
  return (
    <div className="bg-black overflow-x-hidden font-sans w-full">
      <div className="min-h-screen font-sans pt-30 bg-linear-to-b from-[#3a1e05] to-[#000000]">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 mb-4 sm:mb-6 md:mb-8 leading-tight">
            Indices Trading
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Why Trade Indices With Us ?
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
          >
            Book a Demo
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={20} />
            </span>
          </button>

          <h1
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="relative bg-linear-to-r from-white via-orange-400 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl pt-20 md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight"
          >
            Live Indices Rates
          </h1>
        </div>
      </div>

      <div className="flex justify-center w-full  px-4 sm:px-8 lg:px-7.5 py-8 sm:py-12 lg:py-7.5">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="relative w-full max-w-300 max-h-150 aspect-video overflow-hidden rounded-xl sm:rounded-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://static.tradingview.com/static/bundles/widgets-main-video.hvc1.3010a527240f8051d301.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="bg-black py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-orange-500 font-semibold text-lg mb-12">
            Used and trusted by
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="relative w-full overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black to-transparent z-50"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black to-transparent z-10"></div>

            <div className="flex animate-scroll gap-16 w-max">
              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/hantec-markets-logo.svg"
                alt="Hantec Markets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/equiti.svg"
                alt="Equiti"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/Robomarkets.png?height=97&name=Robomarkets.png"
                alt="RoboMarkets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/8cap.png?height=121&name=8cap.png"
                alt="Eightcap"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/ThinkMarkets.png?height=101&name=ThinkMarkets.png"
                alt="ThinkMarkets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/admiral-markets-logo-2.svg"
                alt="Admiral Markets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />

              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/hantec-markets-logo.svg"
                alt="Hantec Markets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/equiti.svg"
                alt="Equiti"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/Robomarkets.png?height=97&name=Robomarkets.png"
                alt="RoboMarkets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/8cap.png?height=121&name=8cap.png"
                alt="Eightcap"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/ThinkMarkets.png?height=101&name=ThinkMarkets.png"
                alt="ThinkMarkets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/admiral-markets-logo-2.svg"
                alt="Admiral Markets"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
            </div>
            <div className="mt-12 border-t border-gray-800"></div>
          </div>
        </div>
      </div>

      <ForexWidget />

      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="grid grid-cols-1  px-10 lg:px-20 pt-20 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8"
      >
        <div className=" flex-2 border-t-2 border-gray-200 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487464375-7cde580bf4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3J5cHRvJTIwYW5kJTIwZm9yZXglMjBpbmRpY2VzfGVufDB8fDB8fHww"
            alt="Partners"
            className=" flex-2 mt-6 img- w-full sm:h-50 md:h-96 lg:h-130 object-cover rounded-xl mb-6 "
          />
          <span className="pl-2 pt-5 text-xl sm:text-xl font-bold ">
            TradingView
          </span>
          <p className="pt-5 pl-2 text-sm text-white sm:text-base font-normal">
            Trade directly from TradingView’s charts with 15+ chart types,
            50,000+ indicators and social trading access.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-3 sm:mt-7 rounded-md bg-linear-to-r from-orange-700 to-orange-500 px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:from-orange-600 hover:to-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Explore Tradingview
          </button>
        </div>

        <div className=" flex-2 border-t-2 border-gray-200 border-t-2-black   ">
          <img
            src="https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyeXB0byUyMGFuZCUyMGZvcmV4JTIwaW5kaWNlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Partners"
            className=" flex-2 mt-6 img- w-full sm:h-50 md:h-96 lg:h-130 object-cover rounded-xl mb-6"
          />
          <span className="pl-2 pt-5 text-xl sm:text-xl font-bold ">
            MetaTrader 4
          </span>
          <p className="pt-5 pl-2 text-sm text-white sm:text-base font-normal">
            Trade CFDs on MetaTrader 4 with automated strategies, 24/7 trading
            robots and 30+ built-in indicators.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-3 sm:mt-7 rounded-md bg-linear-to-r from-orange-700 to-orange-500 px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:from-orange-600 hover:to-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Explore Metatrader 4
          </button>
        </div>
      </div>
      <div className="relative py-32 px-4 mt-30 overflow-hidden">
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
            Experience Trading Excellence
            <br />
            investment today
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
            >
              Get in touch
            </a>

            <a
              href="#"
              className="border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
            >
              Start Trading
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Indices;
