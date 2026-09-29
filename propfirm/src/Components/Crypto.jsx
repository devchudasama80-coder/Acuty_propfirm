import { ArrowUpRight, ArrowRight } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";
import video from "../assets/img/Video1.mp4";
import Footer from "./Footer";
import CryptoWidget from "./CryptoWidget";

function Crypto() {
  return (
    <div className="bg-black overflow-x-hidden w-full">
      <div className="min-h-screen font-sans pt-30 bg-linear-to-b from-[#3a1e05] to-[#000000]">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 mb-4 sm:mb-6 md:mb-8 leading-tight">
            Sharpen your skills, earn real money.
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Market Intelligence gives real-time context around price movement by
            combining sentiment analysis and market news, delivered inside the
            trading platform.
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
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-white to-transparent"></div>
        <CryptoWidget />

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

        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight max-w-xs sm:max-w-lg md:max-w-3xl">
            Industry-leading platforms
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12">
            what is moving the market and why.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
          >
            Sea Leading Plateform Live
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
      <div className="w-full pt-23 max-w-7xl mx-auto grid   grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        <div className="flex flex-col justify-between gap-10">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="text-5xl pl-3 md:text-6xl text-center  md:pl-40  lg:pl-2 font-extrabold text-white leading-tight"
          >
            Why traders <br /> choose <br /> Acuity
          </h1>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                +
              </div>
              <p className="text-gray-800 text-sm md:text-base">
                Trade CFDs at lightning speed on award-winning technology.
              </p>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="700"
              className="flex items-center gap-4 bg-gray-50 rounded-xl p-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                +
              </div>
              <p className="text-gray-800 text-sm md:text-base">
                Globally regulated in multiple jurisdictions including ASIC, FCA
                and CySec.
              </p>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="700"
              className="flex items-center gap-4 bg-gray-50 rounded-xl p-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                +
              </div>
              <p className="text-gray-800 text-sm md:text-base">
                A choice of trading platform from TradingView, TradeLocker,
                MetaTrader 4 and MetaTrader 5.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="bg-slate-50 rounded-2xl p-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Top instruments
          </h2>
          <TradingViewWidget />
        </div>
      </div>
      <h1
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className=" pt-60 text-3xl text-center sm:text-4xl  md:text-5xl md:pl-25 lg:text-7xl lg:pl-10 font-extrabold text-gray-300 mb-6"
      >
        Powerful platforms for serious traders
      </h1>
      <div className="grid grid-cols-1  px-10 lg:px-20 pt-20 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8">
        <div className=" flex-2 border-t-2 border-gray-200 ">
          <img
            src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGluZyUyMGNoYXJ0fGVufDB8fDB8fHww"
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
            src="https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGluZyUyMGNoYXJ0fGVufDB8fDB8fHww"
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
      <div className="grid grid-cols-1 px-10   pt-20  lg:px-20 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8">
        <div className=" flex-2 border-t-2 border-gray-200 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1661609098718-3408828713ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYWRpbmclMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Partners"
            className=" flex-2 mt-6 img- w-full sm:h-50 md:h-96 lg:h-130 object-cover rounded-xl mb-6 "
          />
          <span className="pl-2 pt-5 text-xl sm:text-xl font-bold ">
            Metatrader 5
          </span>
          <p className="pt-5 pl-2 text-white text-sm sm:text-base font-normal">
            Access global CFD markets on MetaTrader 5 with 21 timeframes, 80+
            indicators and powerful trading tools
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-3 sm:mt-7 rounded-md bg-linear-to-r from-orange-700 to-orange-500 px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:from-orange-600 hover:to-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Explore Metatrader 5
          </button>
        </div>

        <div className=" flex-2 border-t-2 border-gray-200 border-t-2-black   ">
          <img
            src="https://images.unsplash.com/photo-1641580529558-a96cf6efbc72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Partners"
            className=" flex-2 mt-6 img- w-full sm:h-50 md:h-96 lg:h-130 object-cover rounded-xl mb-6"
          />
          <span className="pl-2 pt-5 text-xl sm:text-xl font-bold ">
            TradeLocker
          </span>
          <p className="pt-5 pl-2 text-sm text-white sm:text-base font-normal">
            An intuitive platform with advanced charting, 50+ indicators and
            seamless TradingView integration for deeper analysis.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            type="submit"
            className="mt-3 sm:mt-7 rounded-md bg-linear-to-r from-orange-700 to-orange-500 px-6 sm:px-10 py-2.5 text-sm font-semibold text-white hover:from-orange-600 hover:to-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Explore Tradelocker
          </button>
        </div>
      </div>
      <div className="relative w-full px-10 lg:px-20 pt-25  rounded-2xl ">
        <img
          src="https://images.unsplash.com/photo-1536300099515-6c61b290b654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9uZSUyMG1hbiUyMHdvcmslMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fHww"
          alt="Partners"
          className="w-full h-70 sm:h-150 md:h-175 object-cover"
        />

        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-14">
          <p className="text-white pt-20 pl-20 text-xs sm:text-sm font-medium">
            Practice strategies
          </p>

          <div className="flex flex-col  gap-4 pb-4">
            <h1 className="text-white pl-15 pr-10 text-1xl sm:text-3xl md:text-4xl lg:pb-60 lg:text-5xl  font-extrabold leading-tight max-w-3xl">
              Develop your skills with a demo account.{" "}
            </h1>

            <button className="flex items-center pl-20  gap-2 text-white text-sm sm:text-base font-semibold hover:underline w-fit mt-4">
              Sign Up →
            </button>
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
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rotate-45"></div>
          <div className="absolute top-20 right-32 w-72 h-72 bg-white rotate-12"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white rotate-45"></div>
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
              className="border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
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

export default Crypto;
