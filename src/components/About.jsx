import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, TrendingUp, LifeBuoy, Settings } from "lucide-react";

// Single classy color for all cards (no gradient)
const competencies = [
  {
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: "Website Development & AMC",
    desc: "Comprehensive web solutions with post-deployment support and performance monitoring.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
    title: "Custom Software Development",
    desc: "Scalable, secure, and tailored applications designed to meet specific business requirements.",
  },
  {
    icon: <Settings className="w-10 h-10 text-teal-600" />,
    title: "API Integration Services",
    desc: "Integrations for WhatsApp, Facebook, Instagram, and more to automate communication.",
  },
  {
    icon: <Palette className="w-10 h-10 text-yellow-600" />,
    title: "UI/UX Design and Optimization",
    desc: "User-centric designs enhancing customer experience and engagement.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-rose-600" />,
    title: "Digital Strategy & Branding",
    desc: "Strategic digital presence creation to strengthen brand identity and market position.",
  },
  {
    icon: <LifeBuoy className="w-10 h-10 text-indigo-600" />,
    title: "Ongoing Support & Innovation",
    desc: "Continuous optimization, updates, and future-proofing for your digital ecosystem.",
  },
];

export default function About() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">

      {/* Floating shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-200 rounded-full opacity-20 top-0 left-1/4"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-200 rounded-full opacity-15 bottom-0 right-1/4"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            About Bytebub
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Empowering businesses through technology — innovative, reliable, and result-oriented IT solutions.
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="space-y-6 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl">
            <strong>Bytebub</strong> is a professional IT solutions and software development company delivering high-quality, cost-effective digital services.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl">
            With a team of skilled professionals, Bytebub focuses on innovation, reliability, and long-term client success.
          </motion.p>
        </motion.div>

        {/* Core Competencies */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Competencies</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl shadow-xl bg-gray-50 border border-gray-200 hover:shadow-2xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex flex-col items-start space-y-4">

                {/* Icon */}
                <div className="p-4 bg-white rounded-full shadow">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Closing Note */}
        <motion.div
          className="mt-24 text-center text-gray-800 max-w-3xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            At Bytebub, we believe in <strong>transparency</strong>, <strong>trust</strong>, and <strong>technical excellence</strong>.  
            We deliver solutions that exceed expectations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
