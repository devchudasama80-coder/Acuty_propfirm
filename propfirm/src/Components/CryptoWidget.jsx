import { useEffect, useRef } from "react";

const CryptoWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    container.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    container.appendChild(widget);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      dataSource: "Crypto",
      blockSize: "market_cap_calc",
      blockColor: "24h_close_change|5",
      locale: "en",
      symbolUrl: "",
      colorTheme: "dark",
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: "100%",
      height: "100%",
    });

    container.appendChild(script);
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="300"
      data-aos-duration="700"
      className="w-full px-20 h-130  border-gray-200 "
    >
      <div
        ref={containerRef}
        className="tradingview-widget-container w-full h-full"
      />
    </div>
  );
};

export default CryptoWidget;
