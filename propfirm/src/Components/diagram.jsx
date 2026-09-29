import { useState } from "react";

const Diagram = () => {
  const [hovered, setHovered] = useState(null);

  const data = [
    {
      id: "market",
      title: "Market\nIntelligence",
      desc: "Real-time market sentiment and trend analysis.",
      bg: "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.3) 70%)",
      style: "top-0 left-1/2 -translate-x-1/2",
      textPos: "items-center justify-start pt-8 md:pt-20",
    },
    {
      id: "trade",
      title: "Trade\nIntelligence",
      desc: "Turn context into a clear setup, with rationale, levels, and timing.",
      bg: "radial-gradient(circle, rgba(147,51,234,0.9) 0%, rgba(147,51,234,0.3) 70%)",
      style: "bottom-0 left-0",
      textPos: "items-start justify-center pl-4 md:pl-16",
    },
    {
      id: "event",
      title: "Event\nIntelligence",
      desc: "Know what is coming next, and how the market is likely to react.",
      bg: "radial-gradient(circle, rgba(219,39,119,0.9) 0%, rgba(219,39,119,0.3) 70%)",
      style: "bottom-0 right-0",
      textPos: "items-end justify-center pr-4 md:pr-16",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="relative w-full max-w-7xl md:w-220 aspect-square">
        {data.map((circle) => {
          const isActive = hovered === circle.id;
          const isDimmed = hovered && !isActive;

          return (
            <div
              key={circle.id}
              onMouseEnter={() => setHovered(circle.id)}
              onMouseLeave={() => setHovered(null)}
              className={`absolute w-[70%] aspect-square rounded-full 
                transition-all duration-500 cursor-pointer
                ${circle.style}
                ${isActive ? "z-30 scale-105" : "z-10"}
                ${isDimmed ? "opacity-40 blur-[2px]" : "opacity-100"}
              `}
              style={{
                background: circle.bg,
                mixBlendMode: "screen",
              }}
            >
              <div
                className={`absolute inset-0 flex flex-col text-center px-2 md:px-6 ${circle.textPos}`}
              >
                <div className="flex flex-col items-center max-w-30 md:max-w-55">
                  <h3 className="text-sm md:text-2xl font-bold whitespace-pre-line">
                    {circle.title}
                  </h3>
                  <p
                    className={`mt-2 md:mt-4 text-[10px] md:text-base
                      transition-all duration-500 overflow-hidden
                      ${isActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
                    `}
                  >
                    {circle.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <h3 className="text-sm md:text-2xl font-bold text-white text-center whitespace-pre-line">
            Acuity{"\n"}Intelligence
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Diagram;
