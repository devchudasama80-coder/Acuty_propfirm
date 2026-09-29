import { ArrowUpRight, ArrowRight } from "lucide-react";
import Animate2 from "../Components/Animate2";
import Footer from "./Footer";
import cta from "../assets/img/CTA.webp";

function Products() {
  return (
    <div className="bg-black overflow-x-hidden w-full">
      <div className="min-h-screen pt-20 font-sans bg-linear-to-b from-[#3a1e05] via-[#5a2d08] to-[#0a0501]">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 mb-4 sm:mb-6 md:mb-8 leading-tight">
            Market Intelligence
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
            Book a demo
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-white to-transparent"></div>

        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight max-w-xs sm:max-w-lg md:max-w-3xl">
            Market Intelligence helps traders understand
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
            See Market Intelligence Live
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>

      <Animate2 />
      <div className="h-px w-full bg-linear-to-r from-transparent via-white to-transparent"></div>

      <div className="min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-8 sm:mb-10 md:mb-12">
            Understand the markets
          </h1>

          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12 md:mb-16">
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Develop your skills with a demo account.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
              Together, they give traders a complete picture of market
              behaviour, combining emotion, narrative, and price context into
              one intelligence layer.
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="relative mt-8 sm:mt-12 md:mt-16 rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1716279083559-ffc3a863c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Market Intelligence Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <button
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
        >
          Book a demo
          <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>

      <div className="h-px w-full mt-10 sm:mt-12 md:mt-15 bg-linear-to-r from-transparent via-white to-transparent"></div>

      <div className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-center">
          <div className="relative flex items-center justify-center min-h-62.5 sm:min-h-87.5 md:min-h-100 lg:min-h-125 order-2 lg:order-1">
            <div className="flex items-center justify-center w-full h-full rounded-2xl bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.6)_0%,rgba(0,0,0,0.9)_50%,#000_100%)] p-6 sm:p-8 md:p-12">
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/Platform%20Logos.png?width=746&height=352&name=Platform%20Logos.png"
                alt="Market Intelligence Dashboard"
                className="w-full max-w-70 sm:max-w-87.5 md:max-w-112.5 lg:max-w-125 h-auto object-contain"
              />
            </div>
          </div>

          <div className="text-white order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10">
              <span className="text-white">Delivered across the</span>
              <br />
              <span className="text-gray-500">broker experience</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              Market Intelligence reaches traders where decisions happen.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 font-semibold text-sm sm:text-base md:text-lg transition-colors"
                >
                  Inside trading platforms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 font-semibold text-sm sm:text-base md:text-lg transition-colors"
                >
                  Within the client area
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 font-semibold text-sm sm:text-base md:text-lg transition-colors"
                >
                  Through email and messaging channels
                </a>
              </li>
            </ul>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Context is available before, during, and after the trade.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="relative w-full max-w-6xl">
          <div className="absolute -inset-1 rounded-3xl ">
            <div
              style={{ backgroundImage: `url(${cta})` }}
              className="relative rounded-3xl border border-orange-500/40 overflow-hidden bg-cover bg-center bg-no-repeat w-full h-full"
            ></div>
          </div>

          <div className="relative rounded-2xl  overflow-hidden bg-cover bg-center bg-no-repeat w-full h-full">
            <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20 lg:py-24 text-center">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Give your traders the <br className="hidden sm:block" />
                intelligence they expect
              </h1>

              <p className="text-gray-300 mt-4 sm:mt-6 md:mt-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
                If your traders leave the platform to find context, you lose
                control of the experience. You also lose the next click.
              </p>

              <p className="text-gray-300 mt-3 sm:mt-4 md:mt-6 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
                Book a demo and see how Acuity integrates into MT4, MT5,
                cTrader, and custom platforms, as widgets or API.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                <button
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
                >
                  Book a demo
                  <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
