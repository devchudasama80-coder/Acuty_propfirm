import React from "react";
import Footer from "./Footer";

function ContactUs() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#3a1e05] to-[#0a0501] py-20">
      <div className="max-w-7xl pt-30 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Contact us today
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Choose the nature of your enquiry to get in touch.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="grid grid-cols-1 md:grid-cols-2 pb-50 lg:grid-cols-4 gap-6"
        >
          <div className="bg-black aspect-square flex flex-col items-center justify-center p-8 cursor-pointer border border-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[5px] hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]">
            <img
              src="https://acuitytrading.com/hs-fs/hubfs/Sales%20icon%202.png?width=94&height=94&name=Sales%20icon%202.png"
              alt="Technical Support"
              className="w-32 h-32 mb-8 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-white">
              Technical Support
            </h3>
          </div>

          <div className="bg-black aspect-square flex flex-col items-center justify-center p-8 cursor-pointer border border-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[5px] hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]">
            <img
              src="https://acuitytrading.com/hs-fs/hubfs/Billing%20icon.png?width=94&height=94&name=Billing%20icon.png"
              alt="Technical Support"
              className="w-32 h-32 mb-8 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-white">
              Technical Support
            </h3>
          </div>

          <div className="bg-black aspect-square flex flex-col items-center justify-center p-8 cursor-pointer border border-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[5px] hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]">
            <img
              src="https://acuitytrading.com/hs-fs/hubfs/Quantitative%20Indicators%20Icon.png?width=94&height=94&name=Quantitative%20Indicators%20Icon.png"
              alt="Technical Support"
              className="w-32 h-32 mb-8 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-white">
              Technical Support
            </h3>
          </div>

          <div className="bg-black aspect-square flex flex-col items-center justify-center p-8 cursor-pointer border border-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[5px] hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]">
            <img
              src="https://acuitytrading.com/hs-fs/hubfs/General.png?width=94&height=94&name=General.png"
              alt="Technical Support"
              className="w-32 h-32 mb-8 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-white">
              Technical Support
            </h3>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden  py-20 px-6 md:px-12">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full `bg-[radial-linear(circle,_rgba(249,115,22,0.22)_0%,_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full `bg-[linear-gradient(circle,_rgba(234,88,12,0.20)_0%,_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full `bg-[linear-gradient(circle,_rgba(194,65,12,0.14)_0%,_transparent_70%)] blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold  text-orange-300">
              Get in Touch
            </div>
            <h2 className="mb-6 bg-linear-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent md:text-7xl">
              Let's build the future of trading — together
            </h2>
            <p className="max-w-md text-base leading-relaxed text-orange-100/70">
              Talk to our team about how Eightcap Embedded can power trading
              inside your platform.
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="700"
            className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 shadow-[0_0_40px_rgba(249,115,22,0.12)]  md:p-10"
          >
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-xl text-orange-300">
                  First name*
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-orange-400 focus:bg-orange-500/5 focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-xl  text-orange-300">
                  Last name*
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-orange-400 focus:bg-orange-500/5 focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-xl text-orange-300">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-orange-400 focus:bg-orange-500/5 focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-xl text-orange-300">
                  Company Website*
                </label>
                <input
                  type="url"
                  placeholder="Enter company website"
                  className="w-full rounded-xl border border-orange-500/20 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-orange-400 focus:bg-orange-500/5 focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div className="pt-3">
                <button
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  type="submit"
                  className="w-full rounded-xl bg-linear-to-r from-orange-700 via-orange-600 to-orange-500 px-6 py-4 text-sm font-bold uppercase  text-white shadow-[0_8px_30px_rgba(249,115,22,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(249,115,22,0.45)]"
                >
                  Power your platform
                </button>
              </div>

              <p className="pt-1 text-center text-xs text-orange-100/50">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
