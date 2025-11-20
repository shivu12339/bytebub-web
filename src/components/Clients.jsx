import React, { useState } from "react";
import { Building2, BriefcaseBusiness, Star } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "TechNova Solutions",
      project: "E-commerce Platform",
      location: "Bengaluru, Karnataka",
      rating: 5,
      industry: "Online Retail",
      review:
        "We approached Bytebub with performance issues and checkout failures. They redesigned the UI and optimized the backend. Our sales increased by 38% within a month. Communication was excellent throughout the project, and they understood our business pain points perfectly. Truly exceptional work!"
    },
    {
      name: "Medivia Health Systems",
      project: "Health Monitoring System",
      location: "Mysuru, Karnataka",
      rating: 4.8,
      industry: "Hospital & Healthcare",
      review:
        "The new monitoring system is incredibly reliable and secure. Real-time patient analytics and scheduling work flawlessly, even during peak hours. The team ensured HIPAA-level best practices and delivered a smooth user experience for doctors and patients."
    },
    {
      name: "UrbanStay Hotels & Resorts",
      project: "Hotel Booking System",
      location: "Udupi, Karnataka",
      rating: 4.9,
      industry: "Hospitality",
      review:
        "Our hotel booking system used to be slow and confusing. Bytebub rebuilt it with a modern, intuitive UI and integrated payments. Guest booking experience improved drastically, and support tickets dropped by nearly 40%. Amazing professionalism by the team!"
    },
    {
      name: "Finvest Capital Advisors",
      project: "Investment Dashboard",
      location: "Bengaluru, Karnataka",
      rating: 4.7,
      industry: "Finance & Investment",
      review:
        "The financial analytics dashboard they built is fast, accurate, and beautifully designed. Real-time charts update instantly, and our clients appreciate the clean interface. Fantastic attention to detail and strong domain understanding."
    },
    {
      name: "EduBridge Learning Solutions",
      project: "E-Learning Platform",
      location: "Mangaluru, Karnataka",
      rating: 5,
      industry: "Education Technology",
      review:
        "The e-learning platform is incredibly user-friendly and works smoothly even on low-end devices. Teachers find it simple, and students love the gamified UI. We received great feedback from over 500+ active users after launch!"
    },
    {
      name: "SolarEdge Power Systems",
      project: "Solar Energy Monitoring",
      location: "Shivamogga, Karnataka",
      rating: 4.6,
      industry: "Renewable Energy",
      review:
        "Our solar monitoring dashboard needed precise analytics and graphing. Bytebub delivered a secure, accurate, and real-time solution. It has made energy reporting far more transparent and automated."
    },
    {
      name: "BlueOrbit Logistics Pvt. Ltd.",
      project: "Fleet Management System",
      location: "Hubballi, Karnataka",
      rating: 4.8,
      industry: "Transport & Logistics",
      review:
        "Their fleet management system drastically improved our operations. Real-time tracking, route planning, and driver performance monitoring work perfectly. Delays reduced by almost 30% since implementation."
    },
    {
      name: "Elite Automotives India",
      project: "Vehicle Service Manager",
      location: "Belagavi, Karnataka",
      rating: 4.9,
      industry: "Automotive & Services",
      review:
        "Our entire workshop is digital now! Service records, booking, customer updates, and invoices run smoothly. Automation has reduced manual errors and improved customer satisfaction."
    },
    {
      name: "FreshMart Organics",
      project: "Grocery Ordering App",
      location: "Bengaluru, Karnataka",
      rating: 4.7,
      industry: "Grocery & Food eCommerce",
      review:
        "The ordering process is very fast and intuitive. Customers find the app easy to use, and our daily orders increased by nearly 20%. Bytebub’s UI work stands out!"
    },
    {
      name: "Skyzen Technologies Pvt. Ltd.",
      project: "SaaS Automation Platform",
      location: "Bengaluru, Karnataka",
      rating: 5,
      industry: "IT & SaaS Solutions",
      review:
        "A truly world-class SaaS platform! The workflows are smooth, automation is perfect, and the UI is modern. They also helped optimize our cloud infrastructure, saving costs significantly."
    },
    {
      name: "MetroCare Diagnostics",
      project: "Lab Management System",
      location: "Davangere, Karnataka",
      rating: 4.8,
      industry: "Healthcare & Laboratories",
      review:
        "Reports, billing, test assignment, and patient tracking are now automated. The interface is clean and easy for staff to adapt. This software reduced our administrative workload immensely."
    },
    {
      name: "FarmNest Agritech",
      project: "Agriculture Data Platform",
      location: "Hassan, Karnataka",
      rating: 4.6,
      industry: "Agriculture Technology",
      review:
        "The platform helps farmers analyze soil health, irrigation patterns, and crop performance. It's highly useful for small and large farms alike. We appreciate the team's domain understanding."
    },
    {
      name: "StyleSphere Fashion Hub",
      project: "Fashion eCommerce Website",
      location: "Mysuru, Karnataka",
      rating: 4.9,
      industry: "Fashion & Lifestyle eCommerce",
      review:
        "The website has a premium feel with smooth product filters and high-quality banners. Customers love the fast checkout and the mobile experience is excellent. Amazing work!"
    },
    {
      name: "Haven Interiors Studio",
      project: "Interior Design Portfolio Website",
      location: "Bengaluru, Karnataka",
      rating: 5,
      industry: "Interior Design",
      review:
        "One of the most beautiful portfolio websites we've seen! Stunning visuals and animations showcase our work perfectly. It has brought us more customer inquiries than expected."
    },
    {
      name: "Brightway Constructions",
      project: "Project Management Tool",
      location: "Ballari, Karnataka",
      rating: 4.8,
      industry: "Real Estate & Infrastructure",
      review:
        "The project management system automated our daily tasks, site updates, and engineer coordination. Documentation and workflows became much easier to handle. A very valuable solution for our company."
    }
  ];

  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">
          Our Happy Clients
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Click on any client to read their complete review and experience
          working with us.
        </p>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedClient(client)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl border hover:-translate-y-1
                         transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Building2 className="text-green-700" size={22} />
                <h4 className="text-lg font-semibold text-green-700">
                  {client.name}
                </h4>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                <BriefcaseBusiness size={18} />
                <span>{client.industry}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/"
          className="inline-block mt-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </a>
      </div>

      {/* Review Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl relative animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* Name */}
            <h3 className="text-2xl font-semibold text-green-700 mb-3 text-center">
              {selectedClient.name}
            </h3>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array(Math.round(selectedClient.rating))
                .fill()
                .map((_, i) => (
                  <Star key={i} className="text-yellow-400" />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 italic mb-4 text-center leading-relaxed">
              “{selectedClient.review}”
            </p>

            {/* Details */}
            <div className="text-sm text-gray-600 space-y-1 text-center">
              <p><strong>Project:</strong> {selectedClient.project}</p>
              <p><strong>Industry:</strong> {selectedClient.industry}</p>
              <p><strong>Location:</strong> {selectedClient.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
