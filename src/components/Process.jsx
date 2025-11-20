import React from "react";

const steps = [
  { title: "Requirement Gathering", text: "Understand scope, audience and business goals." },
  { title: "Web Design", text: "Wireframes, mockups and UX design." },
  { title: "Web Development", text: "Architecture, frontend, backend, integrations." },
  { title: "QA Testing", text: "Manual and automated testing." },
  { title: "Deployment", text: "Go-live and performance tuning." },
  { title: "Support", text: "Maintenance and post-deployment support." }
];

export default function Process() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-brand text-center mb-8">Web Development Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-brand font-bold text-lg mb-2">{i + 1}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
