import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-30">
      <div className="flex justify-between items-center border-b border-gray-800 pb-8">
        <img
          src="https://acuitytrading.com/hubfs/acuity-new/logos/acuity-logo.svg"
          alt="Acuity Logo"
          className="h-10"
        />
        <div className="flex space-x-3">
          <a href="#" className="bg-gray-700 p-3 rounded">
            <img
              src="https://img.icons8.com/ios-filled/20/ffffff/twitter.png"
              alt="Twitter"
            />
          </a>
          <a href="#" className="bg-gray-700 p-3 rounded">
            <img
              src="https://img.icons8.com/ios-filled/20/ffffff/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a href="#" className="bg-gray-700 p-3 rounded">
            <img
              src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a href="#" className="bg-gray-700 p-3 rounded">
            <img
              src="https://img.icons8.com/ios-filled/20/ffffff/youtube-play.png"
              alt="YouTube"
            />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Technical Support</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#">Our Technology</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Request a demo</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Products</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#">Acuity Intelligence</a>
            </li>
            <li>
              <a href="#">Trade Intelligence</a>
            </li>
            <li>
              <a href="#">Market Intelligence</a>
            </li>
            <li>
              <a href="#">Event Intelligence</a>
            </li>
            <li>
              <a href="#">Dynamic Emails</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Stay up to date</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First name*"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white text-white"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white text-white"
            />
            <input
              type="email"
              placeholder="Email address*"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white text-white"
            />
            <div className="bg-white p-2 rounded w-fit">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YyAx-lEssLARJWgD1g07Q9wvMpfi3WW3YxF5WJo7207h8yuIx-etyx8&s=10"
                alt="reCAPTCHA"
                className="h-10"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 py-6">
        <div className="flex space-x-6 text-orange-500">
          <a href="#">Our Privacy Policy</a>
          <a href="#">Terms and Condtions</a>
        </div>
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2026 Acuity. All Rights Reserved. Built by Fireworx
        </p>
      </div>

      <div className="py-8 text-gray-300 space-y-6">
        <div>
          <h4 className="text-white font-bold mb-2">Regulatory Statement:</h4>
          <p>
            Acuity Research is authorised and regulated by the Financial Conduct
            Authority (FRN: 787261).
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Disclaimer:</h4>
          <p>
            This content is for informational purposes only and should not be
            construed as investment advice. All trading involves risk. Please
            ensure you fully understand those risks before engaging.
          </p>
          <p className="mt-4">
            Acuity does not provide services to individuals or entities subject
            to UK, EU, US, or other applicable international sanctions or
            restrictions.
          </p>
        </div>
      </div>

      <div className="flex items-center border-t border-gray-800 py-6 space-x-4">
        <span className="text-gray-400 text-sm">IN PARTNERSHIP WITH</span>
        <img
          src="https://acuitytrading.com/hubfs/MarketReader%20Logo%20white.png"
          alt="MarketReader"
          className="h-6"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-8 gap-6 items-center py-8 border-t border-gray-800">
        <img
          src="https://acuitytrading.com/hubfs/MT4%20logo.png"
          alt="MetaTrader 4"
          className="h-6"
        />
        <img
          src="https://acuitytrading.com/hubfs/MT5%20Logo.png"
          alt="MetaTrader 5"
          className="h-6"
        />
        <img
          src="https://acuitytrading.com/hubfs/Trading%20View%20logo.png"
          alt="TradingView"
          className="h-6"
        />
        <img
          src="https://acuitytrading.com/hubfs/cTrader%20logo%202.png"
          alt="cTrader"
          className="h-6"
        />
        <img
          src="https://acuitytrading.com/hubfs/2026%20award.png"
          alt="Award 2026"
          className="h-24"
        />
        <img
          src="https://acuitytrading.com/hubfs/Forex%202025%20award%20badge.png"
          alt="Award 2025"
          className="h-24"
        />
        <img
          src="https://acuitytrading.com/hubfs/2024_fx-badge-%231-sentimentanalysisprovider2.webp"
          alt="Award 2024"
          className="h-24"
        />
        <img
          src="https://acuitytrading.com/hubfs/BEST%20AI%20SOLUTION%20FOR%20FINANCIAL%20SERVICES%202-1.svg"
          alt="FMLS Award"
          className="h-24"
        />
      </div>
    </footer>
  );
};

export default Footer;
