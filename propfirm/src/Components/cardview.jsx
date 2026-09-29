import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

function Cardview() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(10);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const firstCard = el.children[0];
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 300;
    el.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
    setProgress(Math.max(10, pct));
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="300"
      data-aos-duration="700"
      className="bg-black text-white min-h-screen py-8 px-4 sm:px-6 lg:px-12"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Partnerships and news
        </h2>
        <button
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="group mt-6 md:mt-10 flex items-center gap-3 bg-linear-to-r from-orange-700 to-orange-500 text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition"
        >
          See All Resource
          <span className="bg-white text-orange-500 rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VydGlmaWNhdGVzfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            EC Markets Integrates Acuity Trading's AI-Driven Market Intelligence
            to Support Traders Across Global Markets
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VydGlmaWNhdGVzfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            Acuity Trading partners with Bullwaves Prime to deliver full Acuity
            Intelligence integration for prop trading environment
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VydGlmaWNhdGVzfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            IG Group Selects Acuity Trading for AI-Powered Market Commentary and
            Insights Across Platforms
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://plus.unsplash.com/premium_photo-1661751188825-710ec341b907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2VydGlmaWNhdGVzfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            EC Markets Integrates Acuity Trading's AI-Driven Market Intelligence
            to Support Traders Across Global Markets
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://plus.unsplash.com/premium_photo-1682126150250-65a653ee9eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VydGlmaWNhdGVzfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            TradingView Partners with Acuity to Bring Sentiment Analysis to
            Millions of Traders Worldwide
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1597700561118-3b2cae28c6c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNlcnRpZmljYXRlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            Saxo Bank Enhances Client Trading Experience with Acuity's Advanced
            News Analytics
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1616101001234-7320af4f1aa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNlcnRpZmljYXRlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            IG Group Selects Acuity Trading for AI-Powered Market Commentary and
            Insights Across Platforms
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://plus.unsplash.com/premium_photo-1664475691319-488c3131ea17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNlcnRpZmljYXRlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            Pepperstone Integrates Acuity's Signal Centre to Deliver Actionable
            Trading Ideas to Global Clients
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1745970649913-2edb9dca4f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNlcnRpZmljYXRlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            Exness Expands Partnership with Acuity Trading to Provide Enhanced
            Market Intelligence Tools
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>

        <div className="shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%]">
          <div className="rounded-2xl overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNlcnRpZmljYXRlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-6 leading-snug">
            OANDA Launches New Research Hub Powered by Acuity Trading's
            AI-Driven Content Solutions
          </h3>
          <button className="mt-6 border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition">
            Read more
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-10">
        <div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="group w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          >
            <span className="transition-transform duration-300 group-hover:-rotate-45">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cardview;
