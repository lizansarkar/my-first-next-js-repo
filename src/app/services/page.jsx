"use client";
import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom, fast, responsive websites and web apps tailored to your business.",
      icon: "💻",
    },
    {
      title: "App Design",
      desc: "Modern UI/UX design for mobile and web applications.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      desc: "Boost your website ranking with powerful SEO techniques.",
      icon: "🚀",
    },
    {
      title: "Maintenance & Support",
      desc: "24/7 monitoring and support to keep your systems running smoothly.",
      icon: "🛠️",
    },
    {
      title: "Digital Marketing",
      desc: "Grow your audience with strategic and result-oriented marketing.",
      icon: "📈",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored digital solutions for unique business needs.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Our <span className="text-indigo-500">Services</span>
        </h1>
        <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
          Choose from our wide range of professional services designed to help 
          businesses scale faster with quality and efficiency.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 p-8 rounded-2xl hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                {service.desc}
              </p>

              <button className="mt-6 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
