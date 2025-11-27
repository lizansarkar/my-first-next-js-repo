"use client";
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          About Our <span className="text-indigo-500">Service Platform</span>
        </h1>
        <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
          We provide high-quality, fast and reliable services to help businesses grow.
          Our mission is to deliver the best digital solutions through excellence and innovation.
        </p>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/148427768.png"
              alt="About Illustration"
              className="w-72 md:w-96 drop-shadow-xl rounded-xl"
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Who We Are
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed text-lg">
              We are a passionate team dedicated to providing top-notch services.
              Our platform helps clients save time, reduce effort, and achieve
              reliable results through smart digital solutions.  
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-lg">
              Whether you need web development, consulting, maintenance or custom services—  
              we ensure everything is handled with quality, security and efficiency.
            </p>

            {/* Small Feature List */}
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-indigo-500 text-xl">✔</span>
                Fast & Reliable Service
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500 text-xl">✔</span>
                Professional Team Support
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500 text-xl">✔</span>
                Flexible & Affordable Plans
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500 text-xl">✔</span>
                Guaranteed Quality Output
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Card */}
        <div className="bg-gray-800/60 rounded-2xl p-8 mt-16 text-center border border-gray-700">
          <h3 className="text-2xl font-bold text-indigo-400">
            Our Mission
          </h3>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            To provide trustworthy, effective and modern digital services that empower
            individuals and businesses worldwide. We focus on quality, innovation and
            customer satisfaction in every project we handle.
          </p>
        </div>

      </div>
    </section>
  );
}

