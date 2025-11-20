import React, { useState } from "react";
import { Briefcase, MapPin, Clock, Users, Cpu, Code, Layers } from "lucide-react";
import { motion } from "framer-motion";

const hireData = [
  {
    title: "App Developer",
    role: "Mobile",
    tagline: "Code your destiny",
    skills: ["Flutter", "React Native", "Kotlin", "REST APIs", "Firebase"],
    experience: "1–4 years",
    location: "Bengaluru / Remote",
    description: `
Develop scalable mobile applications with modern architecture.
Collaborate with cross-functional teams to deliver high-quality apps.
`,
    icon: <Cpu className="w-10 h-10 text-blue-600 mx-auto mb-3" />,
  },
  {
    title: "Frontend Developer",
    role: "Frontend",
    tagline: "Curate pixel-perfect experiences",
    skills: ["ReactJS", "Angular", "Tailwind CSS", "JavaScript", "REST APIs"],
    experience: "1–3 years",
    location: "Bengaluru / Hybrid",
    description: `
Build modern, responsive UI for web applications.
Work closely with designers and backend engineers.
`,
    icon: <Code className="w-10 h-10 text-purple-600 mx-auto mb-3" />,
  },
  {
    title: "Backend Developer",
    role: "Backend",
    tagline: "Find geniuses beyond coding",
    skills: ["Java", "Spring Boot", "Node.js", "SQL", "Microservices", "Docker"],
    experience: "1–4 years",
    location: "Bengaluru / Remote",
    description: `
Work on secure, scalable server-side systems.
Design and implement RESTful APIs and database solutions.
`,
    icon: <Layers className="w-10 h-10 text-green-600 mx-auto mb-3" />,
  },
  {
    title: "Full-Stack Developer",
    role: "Full-Stack",
    tagline: "Epic talents for epic visions",
    skills: ["React", "Node.js", "Java", "Spring Boot", "MongoDB", "MySQL"],
    experience: "2–5 years",
    location: "Bengaluru",
    description: `
Develop end-to-end solutions across frontend and backend.
Implement scalable and maintainable code using best practices.
`,
    icon: <Briefcase className="w-10 h-10 text-indigo-600 mx-auto mb-3" />,
  },
  {
    title: "Software Developer Intern",
    role: "Intern",
    tagline: "Start your journey in tech innovation",
    skills: ["Java", "React", "Spring Boot", "MySQL"],
    experience: "3–6 months",
    location: "Bengaluru / Remote",
    description: `
Learn from experienced developers.
Work on real projects, gaining hands-on experience and mentorship.
`,
    icon: <Users className="w-10 h-10 text-pink-600 mx-auto mb-3" />,
  },
];

const cardColors = [
  "bg-blue-50",
  "bg-purple-50",
  "bg-green-50",
  "bg-indigo-50",
  "bg-pink-50",
];

const roles = ["All", "Mobile", "Frontend", "Backend", "Full-Stack", "Intern"];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filterRole, setFilterRole] = useState("All");

  const filteredJobs = hireData.filter(
    (job) => filterRole === "All" || job.role === filterRole
  );

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Hero Section (Unchanged) */}
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092795360-5e7d27b42f96?auto=format&fit=crop&w=1650&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 to-indigo-600/60"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Join Bytebub
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-6"
          >
            Empower your career with innovation, technology, and growth.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Explore Opportunities
          </motion.button>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setFilterRole(role)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filterRole === role
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards (Updated Colors) */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl shadow-lg cursor-pointer text-gray-800 
                flex flex-col justify-between h-72 hover:scale-105 
                hover:shadow-2xl transition-all border border-gray-200 
                ${cardColors[idx % cardColors.length]}`}
              onClick={() => setSelectedJob(job)}
            >
              <div className="text-center">
                {job.icon}
                <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                <p className="italic mb-3 text-gray-700">{job.tagline}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white px-2 py-1 rounded-full text-xs font-medium border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {job.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-gray-800 text-white font-semibold py-2 px-4 rounded transition mx-auto"
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Culture (same) */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Why Bytebub?
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Projects",
                description: "Work on cutting-edge solutions and technologies.",
                icon: <Cpu className="w-10 h-10 text-blue-500 mx-auto mb-3" />,
              },
              {
                title: "Flexible Work",
                description: "Remote & hybrid options for your comfort.",
                icon: <MapPin className="w-10 h-10 text-purple-500 mx-auto mb-3" />,
              },
              {
                title: "Learning & Growth",
                description: "Opportunities for mentorship and upskilling.",
                icon: <Users className="w-10 h-10 text-green-500 mx-auto mb-3" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal (same) */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative"
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedJob.title}
            </h3>

            <p className="text-gray-600 italic mb-4">
              {selectedJob.tagline}
            </p>

            <p className="text-gray-700 whitespace-pre-line mb-6">
              {selectedJob.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedJob.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={`mailto:hr@bytebub.in?subject=Application for ${selectedJob.title}`}
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded transition"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
