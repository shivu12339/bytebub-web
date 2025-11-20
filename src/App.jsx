import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Auto scroll to top

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail"; // ✅ Added new route
import Portfolio from "./components/Portfolio";
import Industries from "./components/Industries";
import HireResources from "./components/HireResources";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import RefundPolicy from "./components/RefundPolicy";
import Clients from "./components/Clients";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Automatically scrolls to top on navigation */}
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          {/* 🏠 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} /> {/* ✅ Added Dynamic Service Detail */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/hire-resources" element={<HireResources />} />
          <Route path="/contact" element={<Contact />} />

          {/* 😊 Happy Clients Page */}
          <Route path="/clients" element={<Clients />} />

          {/* ⚖️ Legal & Policy Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<RefundPolicy />} />

          {/* ❌ Fallback route (Optional - 404 Page) */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-gray-600 text-xl">
                <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
                <p>The page you are looking for doesn’t exist.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
