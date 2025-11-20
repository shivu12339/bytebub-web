import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

// Import images
import frontendImg from "../assets/web_development.jpg";
import backendImg from "../assets/full stack.jpeg";
import mobileImg from "../assets/app-development.jpg";
import portfolio1Img from "../assets/E-commerce.jpg";
import portfolio2Img from "../assets/Education.jpeg";
import portfolio3Img from "../assets/Food & Restaurant.jpeg";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const navigate = useNavigate();

  const clients = [
    {
      name: "TechNova Solutions",
      project: "E-commerce Platform",
      location: "Bengaluru",
      rating: 5,
      review:
        "Outstanding work! The platform runs smoothly and boosted our online sales significantly.",
    },
    {
      name: "BrightEdge AI",
      project: "AI-powered Analytics Tool",
      location: "Hyderabad",
      rating: 4.8,
      review:
        "Great collaboration and timely delivery. The analytics tool works brilliantly.",
    },
    {
      name: "PixelWave Digital",
      project: "Digital Marketing Dashboard",
      location: "Chennai",
      rating: 4.7,
      review:
        "Clean UI and fast dashboard performance. The real-time analytics impressed us.",
    },
    {
      name: "InnoSoft Labs",
      project: "Custom ERP Solution",
      location: "Bengaluru",
      rating: 4.9,
      review:
        "The ERP system has simplified our operations and improved workflow efficiency.",
    },
    {
      name: "GreenWave Technologies",
      project: "Healthcare Management System",
      location: "Pune",
      rating: 4.6,
      review:
        "Smooth integration, secure system, and excellent performance. Highly recommended.",
    },
    {
      name: "BluePeak Systems",
      project: "Inventory Tracking Application",
      location: "Mumbai",
      rating: 5,
      review:
        "Exceptional quality! Inventory accuracy improved by over 60%.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            About <span className="text-blue-600">Bytebub</span>
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            <strong>Bytebub</strong> is a professional IT solutions and software
            development company delivering high-quality, cost-effective digital
            services.
          </p>

          {/* Mission cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Our Mission",
                text: "Build modern, scalable digital solutions for businesses.",
              },
              {
                title: "Our Vision",
                text: "Be the trusted partner for innovation across industries.",
              },
              {
                title: "Our Values",
                text: "Innovation, integrity, and excellence in every project.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-lg"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/about")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Read More
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            Our Core Services
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: frontendImg,
                title: "Frontend Development",
                desc: "Pixel-perfect UIs using React, Angular, Vue.",
              },
              {
                img: backendImg,
                title: "Backend Development",
                desc: "Microservices, APIs, scalable architectures.",
              },
              { img: mobileImg, title: "Mobile Apps", desc: "High-performance Android & iOS apps." },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={service.img}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/services")}
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Our Portfolio
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: portfolio1Img,
                title: "E-Commerce Website",
                desc: "End-to-end retail & online shopping system.",
              },
              {
                img: portfolio2Img,
                title: "Education Platform",
                desc: "Smart LMS & performance analytics.",
              },
              {
                img: portfolio3Img,
                title: "Restaurant App",
                desc: "Full food ordering & delivery workflow.",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={proj.img}
                  className="w-full h-36 object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <p className="text-gray-700 text-sm">{proj.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/portfolio")}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            View Full Portfolio
          </button>
        </div>
      </section>

      {/* SIMPLE TESTIMONIAL SLIDER (NO CLICK, NO MODAL) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
            What Our Clients Say
          </h2>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={25}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-xl border border-green-100 rounded-2xl p-6 h-full flex flex-col">

                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {Array(Math.round(client.rating))
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                  </div>

                  {/* ONLY Full Review */}
                  <p className="text-gray-700 italic flex-grow mb-4 leading-relaxed">
                    “{client.review}”
                  </p>

                  {/* Client Details */}
                  <h4 className="font-semibold text-lg text-green-900 text-center">
                    {client.name}
                  </h4>
                  <p className="text-sm text-gray-700 text-center">{client.project}</p>
                  <p className="text-xs text-gray-500 text-center">{client.location}</p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
