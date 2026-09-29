import Hero from "./hero";
import Animate from "./Animate";
import Animate2 from "./Animate2";
import Diagram from "./diagram";
import { ArrowRight } from "lucide-react";
import Integrations from "./Integrations";
import Cardview from "./cardview";
import FAQSection from "./FAQ";
import Footer from "./Footer";
import cta from "../assets/img/CTA.webp";

function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Animate />
      <div className="bg-black min-h-100 xl:min-h-100 font-sans flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-400 leading-tight">
          Acuity helps brokers deliver clear trading <br />
          intelligence directly inside their platforms
        </h1>

        <p className="text-gray-300 mt-8 max-w-2xl  text-lg">
          Traders understand what is happening, why it matters, and what to
          watch next. White-labelled. Multi-language. Built for brokers who care
          about session time, activity, and retention.
        </p>

        <button
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
        >
          Explore The plateform
          <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
            <ArrowRight size={20} />
          </span>
        </button>
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
      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="bg-black min-h-100 xl:min-h-100 font-sans flex flex-col items-center justify-center text-center px-4"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-400 leading-tight"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          One intelligence platform. <br />
          Built for broker growth.
        </h1>

        <p className="text-gray-300 mt-8 max-w-3xl text-lg">
          Acuity Intelligence combines Market Intelligence, Event Intelligence,
          and Trade Intelligence into one connected in-platform experience. It
          is built to increase engagement, retention, and platform usage.
        </p>
      </div>
      <Animate2 />
      <div className="mt-6 mx-4 sm:mx-8 md:mx-16 lg:mx-30 border-t border-gray-800"></div>
      <div className="bg-black min-h-100  pt-18 xl:min-h-100 font-sans flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-400 leading-tight">
          A connected intelligence system
          <Diagram />
        </h1>
      </div>
      <div className="bg-black min-h-100 xl:min-h-100 font-sans flex flex-col items-center justify-center text-center px-4">
        <p className="text-gray-300 mt-8 max-w-2xl  text-lg">
          Acuity Intelligence connects all three, in one experience. So traders
          do not jump between tools, tabs, and sources to piece together the
          story.
        </p>

        <button className="group mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition">
          Explore Acuity Intelligence
          <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>
      <div className="mt-6 mx-4 sm:mx-8 md:mx-16 lg:mx-30 border-t border-gray-800"></div>

      <div className="bg-black font-sans py-24 text-white">
        <div className="mx-auto max-w-7xl font-sans px-6">
          <div className="mx-auto font-sans max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Built for broker growth.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              You already invest in acquisition. Your churn problem starts after
              the first deposit.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Acuity is designed to increase engagement and retention by giving
              traders insight they trust, inside the platform where decisions
              happen.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-white">
              What brokers gain
            </h3>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 text-center font-sans sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <img
                src="https://acuitytrading.com/hubfs/Traders.svg"
                alt="More trades"
                className="h-28 w-28"
              />
              <p className="mt-8 text-2xl font-medium text-white">
                More trades per session
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://acuitytrading.com/hubfs/Higher%20Trade.svg"
                alt="Higher trade confidence"
                className="h-28 w-28"
              />
              <p className="mt-8 text-2xl font-medium text-white">
                Higher trade confidence
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://acuitytrading.com/hubfs/Clock.svg"
                alt="Longer platform usage"
                className="h-28 w-28"
              />
              <p className="mt-8 text-2xl font-medium text-white">
                Longer platform usage
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://acuitytrading.com/hubfs/Client%20loyalty.svg"
                alt="Stronger client loyalty"
                className="h-28 w-28"
              />
              <p className="mt-8 text-2xl font-medium text-white">
                Stronger client loyalty
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 mb-16 px-4">
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="group flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
          >
            Book a demo
            <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>

        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-30 border-t border-gray-800"></div>
      </div>
      <div className="bg-black font-sans py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-400 mb-16">
            What our clients say
          </h2>

          <div className="relative  rounded-3xl border border-orange-500/40 bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 opacity-80 overflow-hidden">
            <div
              className="absolute inset-0 bg-orange-glow `bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.25)_0%,_rgba(0,0,0,1)_75%)]`"
              style={{
                background:
                  "radial-gradient(circle at 90% 20%, #d95a10 0%, #7a2f08 20%, #0a0503 100%)",
              }}
            ></div>

            <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
              <p className="text-white text-lg md:text-2xl font-semibold max-w-3xl leading-relaxed">
                “Partnering with Acuity has been an overwhelmingly positive
                experience. Our clients consistently highlight the value of
                their tools in their trading journey.”
              </p>

              <img
                src="https://acuitytrading.com/hubfs/acuity-new/logos/equiti.svg"
                alt="Equiti"
                className="mt-10 h-8 w-auto brightness-0 invert opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      <Integrations />
      <Cardview />

      <div className="bg-black flex items-center justify-center p-6">
        <div className="relative w-full max-w-6xl">
          <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-orange-500 via-orange-600 to-orange-400 blur-2xl opacity-60"></div>

          <div
            style={{ backgroundImage: `url(${cta})` }}
            className="relative rounded-3xl border border-orange-500/40 overflow-hidden bg-cover bg-center bg-no-repeat w-full h-full"
          >
            <div className="px-6 py-20 md:py-24 text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Give your traders the <br />
                intelligence they expect
              </h1>

              <p className="text-gray-300 mt-8 max-w-2xl mx-auto text-base md:text-lg">
                If your traders leave the platform to find context, you lose
                control of the experience. You also lose the next click.
              </p>

              <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-base md:text-lg">
                Book a demo and see how Acuity integrates into MT4, MT5,
                cTrader, and custom platforms, as widgets or API.
              </p>

              <div className="mt-10 flex justify-center">
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
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
