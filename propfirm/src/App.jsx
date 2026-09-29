import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Resources from "./Components/Resources";
import ContactUs from "./Components/ContactUs";
import AnimatedDashboard from "./Components/Animate";
import Intelligence from "./Components/Animate2";
import Diagram from "./Components/diagram";
import Integrations from "./Components/Integrations";
import Cardview from "./Components/cardview";
import FAQSection from "./Components/FAQ";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Forex from "./Components/Forex";
import Crypto from "./Components/Crypto";
import Partner from "./Components/Partner";
import Indices from "./Components/indices";
import ForexWidget from "./Components/ForexWidgwt";
import CryptoWidget from "./Components/CryptoWidget";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Animate" element={<AnimatedDashboard />} />
          <Route path="/Animate2" element={<Intelligence />} />
          <Route path="/Integrations" element={<Integrations />} />
          <Route path="/cardview" element={<Cardview />} />
          <Route path="/FAQ" element={<FAQSection />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Markets/crypto" element={<Crypto />} />
          <Route path="/Markets/forex" element={<Forex />} />
          <Route path="/Markets/Indices" element={<Indices/>}/>
          <Route path="/partner" element={<Partner />} />
          <Route path="/ForexWidget" element={<ForexWidget />} />
          <Route path="/CryptoWidget" element={<CryptoWidget />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
