import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Import images (replace filenames with your actual image names)
import trendycartImg from "../assets/E-commerce.jpg";
import mediviaImg from "../assets/Healthcare.jpeg";
import urbanstayImg from "../assets/HotelManagement.jpg";
import finvestImg from "../assets/Fintech.jpeg";
import edubridgeImg from "../assets/Education.jpeg";
import solaredgeImg from "../assets/SolarEnergy.png";
import blueorbitImg from "../assets/Logistics.jpeg";
import eliteautoImg from "../assets/Automotive.jpg";
import freshmartImg from "../assets/Food & Restaurant.jpeg";
import skyzenImg from "../assets/Technology.jpg";
import havenImg from "../assets/InteriorDesign.png";
import farmnestImg from "../assets/Agriculture.png";
import metrocareImg from "../assets/Laboratory.jpeg";
import stylesphereImg from "../assets/Fashion.png";
import brightwayImg from "../assets/Construction.jpeg";

export default function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      client: "TrendyCart E-Commerce Pvt. Ltd.",
      industry: "Online Retail",
      desc: "Built a complete e-commerce platform featuring secure payments, inventory management, product search, and order tracking. Focused on scalability and SEO optimization.",
      img: trendycartImg,
    },
    {
      client: "Medivia Health Systems",
      industry: "Hospital & Healthcare",
      desc: "Developed a hospital management system with appointment scheduling, EMR integration, and patient record management. Improved overall operational efficiency.",
      img: mediviaImg,
    },
    {
      client: "UrbanStay Hotels & Resorts",
      industry: "Hospitality",
      desc: "Created a hotel booking website with room availability, online reservations, and payment gateway integration. Enhanced user experience and mobile responsiveness.",
      img: urbanstayImg,
    },
    {
      client: "Finvest Capital Advisors",
      industry: "Finance & Investment",
      desc: "Designed a fintech web app for investment tracking, loan management, and payment automation. Implemented high-level security with JWT and encryption.",
      img: finvestImg,
    },
    {
      client: "EduBridge Learning Solutions",
      industry: "Education Technology",
      desc: "Developed an LMS with live classes, progress tracking, and instructor dashboards. Built with React, Node.js, and MongoDB for smooth real-time experience.",
      img: edubridgeImg,
    },
    {
      client: "SolarEdge Power Systems",
      industry: "Renewable Energy",
      desc: "Created a solar power monitoring dashboard with real-time IoT data and performance analytics. Integrated APIs for remote monitoring and reporting.",
      img: solaredgeImg,
    },
    {
      client: "BlueOrbit Logistics Pvt. Ltd.",
      industry: "Transport & Logistics",
      desc: "Developed a logistics management web app for shipment tracking, route optimization, and live delivery status updates using Google Maps API.",
      img: blueorbitImg,
    },
    {
      client: "Elite Automotives India",
      industry: "Automotive & Services",
      desc: "Built a vehicle service booking and maintenance tracking platform. Included customer dashboard, invoice management, and live status updates.",
      img: eliteautoImg,
    },
    {
      client: "FreshMart Organics",
      industry: "Grocery & Food eCommerce",
      desc: "Developed an organic food e-commerce platform with cart management, real-time order tracking, and coupon-based discounts for user engagement.",
      img: freshmartImg,
    },
    {
      client: "Skyzen Technologies Pvt. Ltd.",
      industry: "IT & SaaS Solutions",
      desc: "Built a SaaS-based IT project management dashboard with analytics, client tracking, and cloud integration using AWS and React.",
      img: skyzenImg,
    },
    {
      client: "Haven Interiors Studio",
      industry: "Architecture & Interior Design",
      desc: "Created a portfolio and client booking website showcasing premium interior projects with image galleries and 3D visual previews.",
      img: havenImg,
    },
    {
      client: "FarmNest Agritech",
      industry: "Agriculture Technology",
      desc: "Developed an IoT-enabled agritech dashboard for crop monitoring, weather analytics, and smart irrigation control.",
      img: farmnestImg,
    },
    {
      client: "MetroCare Diagnostics",
      industry: "Healthcare & Laboratories",
      desc: "Built a diagnostics lab management system for online test booking, report delivery, and admin branch management.",
      img: metrocareImg,
    },
    {
      client: "StyleSphere Fashion Hub",
      industry: "Fashion & Lifestyle eCommerce",
      desc: "Created a modern fashion e-commerce site with product filters, virtual try-on previews, and recommendation algorithms.",
      img: stylesphereImg,
    },
    {
      client: "Brightway Constructions",
      industry: "Real Estate & Infrastructure",
      desc: "Developed a real estate project management web app for progress tracking, budgeting, and reporting with role-based dashboards.",
      img: brightwayImg,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Our Client Projects
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={proj.img}
                alt={proj.client}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-lg text-green-700">
                {proj.client}
              </h4>
              <p className="text-sm text-gray-500 italic mb-2">
                {proj.industry}
              </p>
              <p className="text-sm text-gray-700">{proj.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/");
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
