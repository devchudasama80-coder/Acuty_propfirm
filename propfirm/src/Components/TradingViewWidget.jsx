import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "width": "100%",
      "height": 550,
      "symbolsGroups": [
        {
          "name": "Indices",
          "symbols": [
            {"name": "FOREXCOM:SPXUSD", "displayName": "S&P 500"},
            {"name": "FOREXCOM:NSXUSD", "displayName": "US 100"},
            {"name": "FOREXCOM:DJI", "displayName": "Dow 30"},
            {"name": "INDEX:NKY", "displayName": "Nikkei 225"},
            {"name": "INDEX:DEU40", "displayName": "DAX"}
          ]
        },
        {
          "name": "Forex",
          "symbols": [
            {"name": "FX:EURUSD", "displayName": "EUR/USD"},
            {"name": "FX:GBPUSD", "displayName": "GBP/USD"},
            {"name": "FX:USDJPY", "displayName": "USD/JPY"},
            {"name": "FX:USDCHF", "displayName": "USD/CHF"},
            {"name": "FX:AUDUSD", "displayName": "AUD/USD"}
          ]
        },
        {
          "name": "Crypto",
          "symbols": [
            {"name": "BITSTAMP:BTCUSD", "displayName": "BTC/USD"},
            {"name": "BITSTAMP:ETHUSD", "displayName": "ETH/USD"}
          ]
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "colorTheme": "light",
      "locale": "en"
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="300"
      data-aos-duration="700"
      ref={container}
      className="tradingview-widget-container w-full"
    ></div>
  );
}

export default memo(TradingViewWidget);
