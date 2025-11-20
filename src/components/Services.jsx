import React from "react";
import { useNavigate } from "react-router-dom";

import webDevImg from "../assets/web_development.jpg";
import mobileAppImg from "../assets/app-development.jpg";
import fullStackImg from "../assets/full stack.jpeg";
import cloudImg from "../assets/Cloud-Deployment.png";
import ecommerceImg from "../assets/E-commerce.jpg";
import aiImg from "../assets/E-commerce.jpg";

export default function Services() {
  const navigate = useNavigate();

  const servicesList = [
    { id: 1, title: "Web Development", text: "Custom websites, dashboards, and portals built for performance and precision.", img: webDevImg },
    { id: 2, title: "Mobile App Development", text: "Flutter-based cross-platform apps delivering seamless user experiences.", img: mobileAppImg },
    { id: 3, title: "Full-Stack Solutions", text: "Robust apps using MERN, Spring Boot, and microservices.", img: fullStackImg },
    { id: 4, title: "Cloud & DevOps", text: "Scalable cloud infra, CI/CD and monitoring.", img: cloudImg },
    { id: 5, title: "Ecommerce", text: "Payment-integrated & inventory managed storefronts.", img: ecommerceImg },
    { id: 6, title: "AI & Data", text: "Machine learning, analytics and forecasting.", img: aiImg },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-grad mb-6">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <div key={service.id} className="card p-6 bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.text}</p>
              <button
                onClick={() => navigate(`/service/${service.id}`)} // ✅ Navigation added
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
