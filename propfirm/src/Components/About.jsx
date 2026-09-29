import { ArrowRight } from "lucide-react";
import Cardview from "./cardview";
import cta from "../assets/img/CTA.webp";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="bg-black">
      <div className="bg-linear-to-b from-[#3a1e05] via-[#5a2d08] to-[#0a0501] py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl pt-30 md:text-5xl lg:text-7xl font-bold text-[#e8dcc8] leading-tight mb-6 md:mb-10">
            Join a career-defining company
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            If you're curious, ambitious and ready to build in a fast-moving
            industry – we'd love to meet you.
          </p>

          <div className="flex justify-center mb-12 md:mb-20">
            <button
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="700"
              className="group mt-6 md:mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
            >
              Book a demo
              <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#d4c5a9] max-w-3xl mx-auto leading-relaxed font-medium">
            From Melbourne to London and beyond, our teams collaborate across
            timezones to deliver high-performance platforms, responsive service
            and continuous innovation. Behind our technology is a diverse group
            of engineers, risk specialists, compliance experts, marketers, sales
            professionals and support teams working together to make it happen.
          </p>
          <div className="mt-16 md:mt-30 border-t border-neutral-500"></div>
        </div>
      </div>

      <div className="bg-linear-to-b from-[#0a0501] to-[#000000] py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full">
            <img
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="700"
              src="https://au-images.contentstack.com/v3/assets/blt4d1a225173fe15f3/blt108b39feda832e0a/6993e0187a49b0000836457a/computer.webp?format=pjpg&auto=webp&width=1536&quality=75&branch=main"
              alt="UPC Building"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>

          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e8dcc8] mb-6 md:mb-8 leading-tight">
              Professional development
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Growth at Eightcap isn't one-dimensional. Our structured
              development plans are employee-led and collaborative, designed to
              help you map your professional journey. We encourage skills
              training through workshops, certifications, online courses and
              hands-on learning.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-orange-500 font-semibold text-base md:text-lg mb-8 md:mb-12">
            Used and trusted by
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-12 md:w-24 bg-linear-to-r from-black to-transparent z-50"></div>
            <div className="absolute right-0 top-0 h-full w-12 md:w-24 bg-linear-to-l from-black to-transparent z-10"></div>

            <div className="flex animate-scroll gap-8 md:gap-16 w-max">
              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/hantec-markets-logo.svg"
                alt="Hantec Markets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/equiti.svg"
                alt="Equiti"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/Robomarkets.png?height=97&name=Robomarkets.png"
                alt="RoboMarkets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/8cap.png?height=121&name=8cap.png"
                alt="Eightcap"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/ThinkMarkets.png?height=101&name=ThinkMarkets.png"
                alt="ThinkMarkets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/admiral-markets-logo-2.svg"
                alt="Admiral Markets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />

              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/hantec-markets-logo.svg"
                alt="Hantec Markets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/equiti.svg"
                alt="Equiti"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/Robomarkets.png?height=97&name=Robomarkets.png"
                alt="RoboMarkets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/8cap.png?height=121&name=8cap.png"
                alt="Eightcap"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hs-fs/hubfs/ThinkMarkets.png?height=101&name=ThinkMarkets.png"
                alt="ThinkMarkets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
              <img
                src="https://acuitytrading.com/hubfs/admiral-markets-logo-2.svg"
                alt="Admiral Markets"
                className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
            </div>
            <div className="mt-8 md:mt-12 border-t border-gray-800"></div>
          </div>
        </div>
      </div>

      <div className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#e8dcc8] mb-10 md:mb-16">
            Powerful data for any investor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div
              className="group relative rounded-2xl p-6 md:p-10 min-h-80 md:min-h-125 flex flex-col justify-center items-center text-center bg-cover bg-center cursor-pointer transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://au-images.contentstack.com/v3/assets/blt4d1a225173fe15f3/blt17470e1e12dc4771/6a1516c3aab6f57a9e9065cc/PLATFORM-MT5-Colour.webp?format=pjpg&auto=webp&width=1536&quality=75&branch=main')",
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  Online Brokers
                </h3>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mb-6 md:mb-10 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                  Unique, cutting edge data, AI tools and analytics for the
                  financial markets.
                </p>
                <button className="border border-white text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition text-sm md:text-base">
                  Find out more
                </button>
              </div>
            </div>

            <div
              className="group relative rounded-2xl p-6 md:p-10 min-h-80 md:min-h-125 flex flex-col justify-center items-center text-center bg-cover bg-center cursor-pointer transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://au-images.contentstack.com/v3/assets/blt4d1a225173fe15f3/bltcad9ab08d778a857/697aa396654bc564e0fc4656/PLATFORM-TradingView.webp?format=pjpg&auto=webp&width=1536&quality=75&branch=main')",
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  Trading plateform
                </h3>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mb-6 md:mb-10 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                  Trade directly from TradingView's charts with 15+ chart types,
                  100,000+ indicators and social trading access.
                </p>
                <button className="border border-white text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition text-sm md:text-base">
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent"></div>

      <div className="bg-black py-12 md:py-20 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full">
            <img
              src="https://au-images.contentstack.com/v3/assets/blt4d1a225173fe15f3/bltb8c26eed7623b89a/69b370eb2fa83f7ca24cafbc/DEVICES-HANDS-phone-tradingview.webp?format=pjpg&auto=webp&width=1536&quality=75&branch=main"
              alt="CR Hope Foundation"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 leading-tight mb-6 md:mb-8">
              Client experience
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Your network gains access to a global CFD broker regulated in
              multiple jurisdictions, competitive pricing, trusted platforms and
              responsive customer support.
            </p>

            <button
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="700"
              className="group mt-6 md:mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
            >
              Find Out More
              <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent"></div>

      <Cardview />

      <div className="bg-black flex items-center justify-center p-4 md:p-6">
        <div className="relative w-full max-w-6xl">
          <div className="absolute -inset-1 rounded-1xl bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 blur-xl opacity-150"></div>

          <div
            style={{ backgroundImage: `url(${cta})` }}
            className="relative rounded-3xl border border-orange-500/40 overflow-hidden bg-cover bg-center bg-no-repeat w-full h-full"
          >
            <div className="px-4 sm:px-6 py-12 md:py-20 lg:py-24 text-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Give your traders the <br />
                intelligence they expect
              </h1>

              <p className="text-gray-300 mt-6 md:mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                If your traders leave the platform to find context, you lose
                control of the experience. You also lose the next click.
              </p>

              <p className="text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                Book a demo and see how Acuity integrates into MT4, MT5,
                cTrader, and custom platforms, as widgets or API.
              </p>

              <div className="mt-8 md:mt-10 flex justify-center">
                <button
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  className="group mt-6 md:mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
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

export default About;
