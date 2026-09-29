import React from "react";
import video from "../assets/img/Video1.mp4";
import Footer from "./Footer";
function Resources() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-50 pb-16">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-500">
          Resources
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="flex flex-wrap gap-8 md:gap-12 border-b border-gray-800 pb-4"
        >
          <button className="text-white text-lg font-semibold border-b-2 border-white pb-2">
            All
          </button>
          <button className="text-gray-500 text-lg font-semibold hover:text-orange-500 pb-2">
            Press Release
          </button>
          <button className="text-gray-500 text-lg font-semibold hover:text-orange-500 pb-2">
            Market Commentary
          </button>
          <button className="text-gray-500 text-lg font-semibold hover:text-orange-500 pb-2">
            News Story
          </button>
          <button className="text-gray-500 text-lg font-semibold hover:text-orange-500 pb-2">
            Blog
          </button>
          <button className="text-gray-500 text-lg font-semibold hover:text-orange-500 pb-2">
            Events
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvJTIwdHJhZGluZyUyMGltYWdlfGVufDB8fDB8fHww"
                    alt="EC Markets"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  EC Markets Integrates Acuity Trading's AI-Driven Market
                  Intelligence to Support Traders Across Global Markets
                </h3>
                <button
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvJTIwdHJhZGluZyUyMGltYWdlfGVufDB8fDB8fHww"
                    alt="Bullwaves Prime"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Acuity Trading partners with Bullwaves Prime to deliver full
                  Acuity Intelligence integration for prop trading environment
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvJTIwdHJhZGluZyUyMGltYWdlfGVufDB8fDB8fHww"
                    alt="iFX EXPO"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Acuity Trading to Attend iFX EXPO International 2026 in Cyprus
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681487464375-7cde580bf4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3J5cHRvJTIwdHJhZGluZyUyMGltYWdlfGVufDB8fDB8fHww"
                    alt="MarketReader CEO"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  MarketReader Appoints Andrew Lane as CEO Following Acuity
                  Trading Strategic Investment
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3J5cHRvJTIwdHJhZGluZyUyMGltYWdlfGVufDB8fDB8fHww"
                    alt="WNSTN"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Acuity Trading and WNSTN Partner to Co-Integrate Trading
                  Intelligence
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579226905180-636b76d96082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyeXB0byUyMHRyYWRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="MarketReader Investment"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Patterns are now live in AnalysisIQ
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1620266757065-5814239881fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyeXB0byUyMHRyYWRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3Dhttps://plus.unsplash.com/premium_photo-1661371241897-3202947ace30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbiUyMHRyYWRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="iFX EXPO"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Trade247 strengthens trader experience with Acuity
                  Intelligence
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbiUyMHRyYWRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="iFX EXPO"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  FP Markets Partners with Acuity Trading to Deliver AI-Powered
                  Trading Signals and Tools
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=zcQJw-EIqsRS7Ix6hhDpjIjAlwPBovxcA2uPFx2L9Bc="
                    alt="iFX EXPO"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Catch the Acuity Trading Team at IFX Expo Dubai
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>

              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMHRyYWRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="iFX EXPO"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-6 leading-snug">
                  Acuity named #1 Sentiment Analysis Provider 2026 in the
                  ForexBrokers Annual Awards
                </h3>
                <button className="self-start border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-6">
            <div className="flex justify-end mb-4">
              <button
                data-aos="zoom-in-up"
                data-aos-delay="300"
                data-aos-duration="700"
                className="text-orange-500 text-sm hover:underline"
              >
                Clear
              </button>
            </div>

            <div className="bg-olive-100 rounded-lg border-t border-gray-950 max-h-125 overflow-y-auto custom-scrollbar p-6">
              <div className="mb-8">
                <h3 className="text-lg text-black font-bold mb-4 pb-4 border-b border-gray-950">
                  Press Release
                </h3>

                <ul className="space-y-3 pl-2">
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      AnalysisIQ
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Broker
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Data Science
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Dynamic Emails
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Market Signals
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      News Story
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Partnership
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Press Release
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Team Update
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Trade Ideas
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg text-black font-bold mb-4 pb-4 border-b border-gray-950">
                  Market Commentary
                </h3>

                <ul className="space-y-3 pl-2">
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      AI
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Asia
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      BOE
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Brexit
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Central Banks
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Commodities
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Crypto
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      ECB
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Equities
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      FED
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Forex
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-black font-bold mb-4 pb-4 border-b border-gray-950">
                  News Story
                </h3>

                <ul className="space-y-3 pl-2">
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      AI
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Awards
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      Central Banks
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      ECB
                    </button>
                  </li>
                  <li>
                    <button className="text-black hover:text-orange-500 text-sm">
                      FED
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-32 px-4 overflow-hidden">
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
            Get started for sharper
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
              Request a demo
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
