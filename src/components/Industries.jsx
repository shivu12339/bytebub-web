import React from "react";

// Import your images here
import educationImg from "../assets/Education.jpeg";
import healthcareImg from "../assets/Healthcare.jpeg";
import fintechImg from "../assets/Fintech.jpeg";
import realEstateImg from "../assets/Realestate.jpeg";
import retailImg from "../assets/Retail.jpeg";
import travelImg from "../assets/Travel.jpeg";
import logisticsImg from "../assets/Logistics.jpeg";
import foodImg from "../assets/Food & Restaurant.jpeg";
import astrologyImg from "../assets/Astrology.jpeg";
import entertainmentImg from "../assets/Entertainment.jpeg";
import onDemandImg from "../assets/On-Demand.jpeg";
import sportsImg from "../assets/Sports.jpeg";

const industriesData = [
  { name: "Education", tagline: "Building the future, one institution at a time.", img: educationImg },
  { name: "Healthcare", tagline: "Apps that care better, smarter, and faster.", img: healthcareImg },
  { name: "Fintech", tagline: "Robust yet scalable tech solutions.", img: fintechImg },
  { name: "Real Estate", tagline: "Streamline your real estate business with us.", img: realEstateImg },
  { name: "Retail", tagline: "Retail revolution with omnichannel solutions.", img: retailImg },
  { name: "Travel & Hospitality", tagline: "Design exceptional travel experiences.", img: travelImg },
  { name: "Logistics", tagline: "Optimize your supply chain and thrive.", img: logisticsImg },
  { name: "Food & Restaurant", tagline: "Custom food and restaurant solutions.", img: foodImg },
  { name: "Astrology", tagline: "Insightful apps for cosmic guidance.", img: astrologyImg },
  { name: "Entertainment", tagline: "Crafting engaging apps for all.", img: entertainmentImg },
  { name: "On-Demand", tagline: "Tap into the power of convenience with us.", img: onDemandImg },
  { name: "Sports", tagline: "From field to fans – on and off-field solutions.", img: sportsImg },
];

function IndustriesGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {industriesData.map((industry, idx) => (
        <div
          key={idx}
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
        >
          <img
            src={industry.img}
            alt={industry.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{industry.name}</h3>
          <p className="text-gray-700 italic">{industry.tagline}</p>
        </div>
      ))}
    </div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-12">Industries We Serve</h2>
        <IndustriesGrid />
      </div>
    </section>
  );
}
