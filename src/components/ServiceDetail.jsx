import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import webDevImg from "../assets/web_development.jpg";
import mobileAppImg from "../assets/app-development.jpg";
import fullStackImg from "../assets/full stack.jpeg";
import cloudImg from "../assets/Cloud-Deployment.png";
import ecommerceImg from "../assets/E-commerce.jpg";
import aiImg from "../assets/E-commerce.jpg";

const serviceData = [
  {
    id: 1,
    title: "Web Development",
    img: webDevImg,
    description:
      "We build responsive, high-performing, and SEO-optimized websites that enhance your online presence. From business websites to custom dashboards, we deliver scalable and secure solutions.",
    highlights: [
      "Custom static & dynamic websites using React, Angular, or Spring Boot",
      "Optimized for SEO, performance, and cross-device compatibility",
      "Integrated CMS solutions for easy content management",
      "Post-launch support, analytics, and maintenance",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    img: mobileAppImg,
    description:
      "We craft cross-platform mobile apps that provide seamless user experiences. Our apps are designed to perform, engage, and scale for Android and iOS users.",
    highlights: [
      "Flutter & React Native-based hybrid app development",
      "Native integration for camera, GPS, and payments",
      "App Store & Play Store deployment support",
      "UI/UX design tailored for mobile-first experience",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Solutions",
    img: fullStackImg,
    description:
      "From concept to deployment, our full-stack development service covers frontend, backend, APIs, and databases — ensuring complete digital solutions for modern businesses.",
    highlights: [
      "MERN, MEAN, and Spring Boot-based scalable architecture",
      "API development & integration for seamless data flow",
      "Microservices and modular architecture for flexibility",
      "Automated testing, version control, and CI/CD setup",
    ],
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    img: cloudImg,
    description:
      "We empower businesses with cloud transformation and automation. Our DevOps experts help you deploy, monitor, and scale applications efficiently on AWS, Azure, or GCP.",
    highlights: [
      "Cloud migration & deployment using Docker, Kubernetes",
      "CI/CD pipelines with GitHub Actions, Jenkins",
      "Infrastructure-as-Code using Terraform",
      "Monitoring & performance optimization with Grafana, Prometheus",
    ],
  },
  {
    id: 5,
    title: "Ecommerce",
    img: ecommerceImg,
    description:
      "We build end-to-end eCommerce platforms with smooth checkout experiences, secure payment gateways, and robust admin dashboards.",
    highlights: [
      "Custom eCommerce web & mobile app solutions",
      "Secure payment gateway integration (Razorpay, Stripe, PayPal)",
      "Inventory, shipping, and order management modules",
      "SEO & digital marketing integration for brand growth",
    ],
  },
  {
    id: 6,
    title: "AI & Data",
    img: aiImg,
    description:
      "Leverage artificial intelligence and data analytics to unlock insights and automation for your business growth.",
    highlights: [
      "Machine learning model design & training using Python",
      "Predictive analytics and data visualization dashboards",
      "Natural Language Processing (NLP) for chatbots and automation",
      "Integration of AI APIs for smart recommendations",
    ],
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = serviceData.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">Service Not Found</h2>
        <button
          onClick={() => navigate("/services")}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Image */}
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
      />

      {/* Title */}
      <h2 className="text-4xl font-bold text-blue-800 mb-4">{service.title}</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>

      {/* Highlights */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          What We Offer:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {service.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4 text-lg">
          Want to build something amazing with <strong>{service.title}</strong>?
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Contact Us
        </button>
      </div>

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/services")}
          className="text-blue-700 hover:underline text-lg"
        >
          ← Back to All Services
        </button>
      </div>
    </div>
  );
}
