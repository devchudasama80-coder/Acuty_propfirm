import CircularGallery from "./Gallary";

const integrations = [
  {
    image:
      "https://7797319.fs1.hubspotusercontent-na1.net/hubfs/7797319/cTrader-2-1-1.jpg",
    name: "Trading Platform",
  },
  {
    image:
      "https://7797319.fs1.hubspotusercontent-na1.net/hubfs/7797319/Trading-View-2.jpg",
    name: "TradingView",
  },
  {
    image:
      "https://7797319.fs1.hubspotusercontent-na1.net/hubfs/7797319/Telegram-1.jpg",
    name: "Telegram",
  },
  {
    image:
      "https://7797319.fs1.hubspotusercontent-na1.net/hubfs/7797319/FXBO-1.jpg",
    name: "FXBO",
  },
  {
    image:
      "https://7797319.fs1.hubspotusercontent-na1.net/hubfs/7797319/MT5-1.jpg",
    name: "MetaTrader",
  },
  {
    image:
      "https://7797319.fs1.hubspotusercontent-na1.net/hubfs/7797319/Interop-1.jpg",
    name: "MetaTrader",
  },
];

function Integrations({
  title = "Flexible integration options",
  subtitle = "Seamlessly connect with the tools you already use",
  items = integrations,
  bend = 9,
  borderRadius = 0.22,
  scrollEase = 0.07,
  scrollSpeed = 2,
  height = 600,
  className = "bg-black",
}) {
  return (
    <div className={`relative w-full overflow-hidden py-24 px-5 ${className}`}>
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-white font-bold tracking-tight leading-tight text-4xl sm:text-5xl lg:text-6xl mb-4">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto max-w-xl text-base sm:text-lg text-white/60 font-normal leading-relaxed mb-14">
            {subtitle}
          </p>
        )}

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="relative w-full"
          style={{ height: `${height}px` }}
        >
          <CircularGallery
            items={items}
            bend={bend}
            borderRadius={borderRadius}
            scrollEase={scrollEase}
            scrollSpeed={scrollSpeed}
          />
        </div>
      </div>
      <div className="mt-20 mx-4 sm:mx-8 md:mx-16 lg:mx-30 border-t border-gray-800"></div>
    </div>
  );
}
export default Integrations;
