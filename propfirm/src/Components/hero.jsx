import React, { useRef, useEffect } from "react";
import { ArrowRight, Info } from "lucide-react";
import Globe from "react-globe.gl";

const paidCards = [
  { amount: "$50,560.67", time: "13 hours", name: "Philip", flag: "🇺🇸" },
  { amount: "$49,475.62", time: "11 hours", name: "Alexis", flag: "🇨🇦" },
  { amount: "$31,600.00", time: "51 min", name: "Leonel", flag: "🇦🇷" },
  { amount: "$25,451.70", time: "2 hours", name: "Victor", flag: "🇫🇷" },
  { amount: "$23,464.62", time: "2 hours", name: "Pavan", flag: "🇮🇳" },
  { amount: "$22,835.53", time: "6 hours", name: "KOWK", flag: "🇭🇰" },
  { amount: "$20,906.52", time: "13 hours", name: "Gurwinder", flag: "🇨🇦" },
  { amount: "$20,384.34", time: "2 hours", name: "Ivan", flag: "🇺🇸" },
  { amount: "$20,088.41", time: "10 hours", name: "Harno", flag: "🇮🇩" },
  { amount: "$19,026.67", time: "12 hours", name: "Lukman", flag: "🇦🇪" },
];

const RewardsSection = () => {
  const globeRef = useRef();
  const scrollingCards = [...paidCards, ...paidCards];

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.2;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.pointOfView({ lat: 20, lng: 30, altitude: 2 });
    }
  }, []);

  return (
    <section className="relative bg-linear-to-b from-[#070300] via-[#3e2910] to-[#000000] text-white overflow-hidden py-20 md:py-40 lg:py-60 min-h-screen">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 md:w-150 md:h-150 bg-sky-400/20 rounded-full blur-[100px] md:blur-[180px] pointer-events-none"></div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] max-w-225 max-h-225 flex items-center justify-center pointer-events-none opacity-40 md:opacity-90">
        <Globe
          ref={globeRef}
          width={window.innerWidth < 768 ? 500 : 900}
          height={window.innerWidth < 768 ? 500 : 900}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="#7dd3fc"
          atmosphereAltitude={0.25}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold flex items-center gap-2">
          $332.2M
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
            +
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-lg">
          Rewards sent to thousands of traders in 170+ countries.
          <br />
          99.99% processed within 24 hours, no delays.
        </p>

        <div className="mt-6 md:mt-10 flex flex-wrap gap-6 sm:gap-8 md:gap-10">
          <div>
            <p className="text-2xl sm:text-3xl font-bold">
              4
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600 text-base md:text-lg ml-1">
                hrs
              </span>
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 tracking-widest">
              AVG. PROCESSING TIME
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold">
              510.4
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600 text-base md:text-lg ml-1">
                K+
              </span>
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 tracking-widest">
              DCFUNDED ACCOUNTS
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold">
              55
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600 text-base md:text-lg ml-1">
                %
              </span>
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 tracking-widest">
              REPEAT REWARDS
            </p>
          </div>
        </div>

        <button 
         data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="mt-8 md:mt-10 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition px-5 md:px-6 py-2.5 md:py-3 rounded-lg flex items-center gap-2 font-medium text-sm md:text-base shadow-lg shadow-orange-500/40">
          Discover Rewards <ArrowRight size={16} className="md:w-4.5 md:h-4.5" />
        </button>
      </div>

     <div className="relative z-10 mt-16 md:mt-24 w-full overflow-hidden py-6 md:py-8 bg-black/40 backdrop-blur-xl border-y border-orange-500/10"
  style={{
    maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
  }}
>
  <div className="flex gap-4 md:gap-6 animate-scroll w-max pl-4 sm:pl-6 md:pl-12">
    {scrollingCards.map((card, idx) => (
      <div
        key={idx}
        className="min-w-48 sm:min-w-56 md:min-w-60 bg-linear-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-md border border-orange-500/20 hover:border-orange-500/60 transition rounded-2xl p-4 md:p-5 flex flex-col justify-between h-44 md:h-50 shadow-lg shadow-black/50"
      >
        <div>
          <span className="bg-linear-to-r from-orange-500 to-orange-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded">
            PAID
          </span>
          <h3 className="text-xl md:text-2xl font-bold mt-3 md:mt-4">{card.amount}</h3>
          <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm mt-1">
            <Info size={12} />
            <span>Paid in {card.time}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 md:mt-4 pt-2 md:pt-3 border-t border-gray-800">
          <span className="text-lg md:text-xl">{card.flag}</span>
          <span className="text-xs md:text-sm font-medium">{card.name}</span>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default RewardsSection;