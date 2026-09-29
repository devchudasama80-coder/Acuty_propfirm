import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import card7 from "../assets/img/card7.png";
import Footer from "./Footer";
import Animate from "./Animate";
import video from "../assets/img/Video1.mp4";
import ForexWidget from "./ForexWidgwt";

function Forex() {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1623227413711-25ee4388dae3?q=80&w=1172&auto=format&fit=crop",
      title: "Crypto",
      desc: "Seamlessly integrate leading crypto derivatives into your platform – with deep liquidity and institutional-grade execution.",
      link: "/Markets/crypto",
    },
    {
      img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1170&auto=format&fit=crop",
      title: "Indices",
      desc: "Add crypto and stock indices effortlessly, giving your users diversified trading opportunities in a single environment.",
      link: "/Markets/Indices",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1682309799578-6e685bacd4e1?q=80&w=1212&auto=format&fit=crop",
      title: "Stocks",
      desc: "Bring global equity markets to your users, with access to major international stocks through a unified trading experience.",
      link: "/",
    },
    {
      img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1170&auto=format&fit=crop",
      title: "Metals",
      desc: "Expand your trading offering with precious metals, including gold and silver.",
      link: "/resources",
    },
    {
      img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1169&auto=format&fit=crop",
      title: "Forex (FX)",
      desc: "Offer access to the world's largest financial market, with major and minor currency pairs from around the globe.",
      link: "/Markets/forex",
    },
  ];

  return (
    <div className="w-full bg-black">
      <div className="relative w-full pb-20 overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1687331118725-e4e1388fe8e3?q=80&w=1332&auto=format&fit=crop"
          alt="Partners"
          className="w-full h-125 sm:h-150 md:h-175 object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
            Your platform. <br /> Supercharged.
          </h1>
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl max-w-2xl font-normal">
            Seamlessly embed multi-asset trading into your platform with
            Eightcap Embedded.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="mt-8 px-8 py-3 rounded-lg bg-linear-to-r from-orange-700 to-orange-500 text-white hover:bg-orange-700 transition text-sm md:text-base font-semibold"
          >
            Build the Feature
          </button>
          
        </div>
      </div>

      <ForexWidget />

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

      <Animate />

      <h1 className="text-2xl pl-10 pt-10 sm:text-3xl lg:px-3 lg:pt-20 md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-6">
        A single integration. Five global markets.
      </h1>

      <p className="pt-5 text-base px-3 lg:text-lg lg:font-bold sm:text-lg md:text-xl text-gray-100 mb-4">
        Launch faster, scale globally and offer your users access to multi-asset
        derivatives – all through a single, powerful API.
      </p>

      <div className="w-full bg-black py-8">
        <div className="border-t border-gray-300 mb-6 mx-6"></div>
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex gap-6 w-max animate-cardSlide"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...cards, ...cards].map((card, index) => (
              <Link
                to={card.link}
                key={index}
                className="shrink-0 w-75 cursor-pointer group"
              >
                <div className="relative w-full h-70 rounded-sm overflow-hidden">
                  <img 
                    src={card.img}
                    alt={card.title}
                    className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-6 text-[20px] font-bold text-gray-100 group-hover:text-orange-500 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-100 leading-relaxed">
                  {card.desc} 
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="w-full py-16 px-10"
      >
        <div className="flex flex-wrap pt-20 justify-center items-center gap-6 sm:gap-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Most trusted broker in Asia 2025
            </p>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-[8px] sm:text-[10px] font-bold text-white leading-tight">
              International Business Magazine
            </p>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Global Forex Broker of the year 2023
            </p>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-[8px] sm:text-[10px] font-bold text-white leading-tight">
              Global Business Review Magazine
            </p>
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Since 2020
            </p>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-[10px] sm:text-xs font-extrabold text-white leading-tight">
              DAYTRADING
            </p>
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Best TradingView Broker 2025
            </p>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-sm sm:text-base font-extrabold text-white leading-tight">
              TV
            </p>
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Best Global CFDForex Broker 2024
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-6 sm:mt-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-sm sm:text-base font-extrabold text-white leading-tight">
              A+OZ
            </p>
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Best Crypto Broker
            </p>
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-linear-to-r from-orange-700 to-orange-400 flex flex-col items-center justify-center text-center p-3">
            <p className="text-[8px] sm:text-[10px] font-semibold text-white leading-tight mt-1">
              Best AU Broker 2024
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-delay="300" 
        data-aos-duration="700"
        className="relative py-32 mt-35 px-10 overflow-hidden"
      >
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
            Platforms built for traders <br /> investment today
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

export default Forex;