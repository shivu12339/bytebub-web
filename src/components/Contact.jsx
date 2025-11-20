import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Name: ${form.name}%0A
Email: ${form.email}%0A
Phone: ${form.phone}%0A
Company: ${form.company}%0A
Project Type: ${form.projectType}%0A
Message: ${form.message}
`;

    window.open(
      `mailto:contact@bytebub.in?subject=New Project Inquiry&body=${body}`,
      "_blank"
    );

    alert("Opening your email app...");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Let's Work Together 🚀
          </h2>

          <p className="mb-6 text-lg text-gray-700">
            Have a project in mind? Contact us today and let’s build something amazing.
          </p>

          <div className="space-y-3 text-lg">
            <p>
              📧{" "}
              <a
                href="mailto:contact.bytebub@grtengg.co.in"
                className="text-blue-600 underline"
              >
                contact@bytebub.in
              </a>
            </p>

            <p>
              📞{" "}
              <a
                href="tel:+918073343628"
                className="text-blue-600 underline"
              >
                +91-8073343628
              </a>
            </p>

            <p>📍 Bengaluru, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200 space-y-6"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Phone & Company */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Your Phone Number"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company (Optional)"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Project Type */}
          <select
            name="projectType"
            required
            value={form.projectType}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Project Type</option>
            <option value="Website Development">Website Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="E-Commerce Platform">E-Commerce Platform</option>
            <option value="Custom Software">Custom Software</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
            <option value="Other">Other</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project..."
            className="p-3 border rounded-lg w-full h-32 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Send Message ✉️
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
