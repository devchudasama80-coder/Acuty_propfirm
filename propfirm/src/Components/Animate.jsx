import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function AnimatedDashboard() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 60,
    mass: 0.5,
  });

  const fadeIn = useTransform(progress, [0, 0.3, 1], [10, 0.5, 1]);

  return (
    <div
      ref={sectionRef}
      className="max-w-6xl mx-auto gap-2 px-8 pt-0  pb-30 md:pt-3 relative"
    >
      <div className="relative rounded-3xl p-4 md:p-8">
        <div className="relative">
          <img
            src="https://acuitytrading.com/hubfs/DmR0FCkvXv-copy.jpg"
            alt="Dashboard"
            className="w-full rounded-2xl border border-[#ff8f14] shadow-[0_0_60px_rgba(255,143,20,0.45),0_0_120px_rgba(255,143,20,0.25)]"
          />

          <motion.img
            src="https://acuitytrading.com/hs-fs/hubfs/Candlestick-graph_V2.webp"
            alt="Candlestick"
            className="hidden md:block absolute top-0 right-0 w-60 rounded-xl z-50"
            style={{
              y: useTransform(progress, [1, 0], [100, 0]),
              x: useTransform(progress, [0, 1], [0, -100]),
              opacity: 1.5,
              filter: "drop-shadow(0 0 25px rgba(255,143,20,0.6))",
            }}
          />

          <motion.img
            src="https://acuitytrading.com/hs-fs/hubfs/4.3.webp"
            alt="Litecoin"
            className="hidden md:block absolute bottom-4 left-0 w-48 rounded-xl z-20"
            style={{
              y: useTransform(progress, [0, 1], [-200, -20]),
              x: useTransform(progress, [0, 1], [120, 48]),
              opacity: 1.5,
              filter: "drop-shadow(0 0 25px rgba(255,143,20,0.6))",
            }}
          />

          <motion.img
            src="https://acuitytrading.com/hs-fs/hubfs/Opportunity.webp"
            alt="Opportunity"
            className="hidden md:block absolute bottom-2 right-0 w-96 rounded-xl z-20"
            style={{
              x: 10,
              y: useTransform(progress, [0, 1], [40, -90]),
              opacity: 1.5,
              filter: "drop-shadow(0 0 25px rgba(255,143,20,0.6))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimatedDashboard;
