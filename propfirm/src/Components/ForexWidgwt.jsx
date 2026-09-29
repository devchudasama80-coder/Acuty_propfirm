import { useEffect } from "react";

function ForexWidget() {
  useEffect(() => {
    const src = "https://widgets.tradingview-widget.com/w/en/tv-forex-table.js";

    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="300"
      data-aos-duration="700"
      className="w-full overflow-hidden rounded-2xl border bg-black p-10 shadow"
    >
      <tv-forex-table
        displayed-value="dailyChange"
        heatmap="true"
        theme="dark"
      ></tv-forex-table>
    </div>
  );
}
export default ForexWidget;
