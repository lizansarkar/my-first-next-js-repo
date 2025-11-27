"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Build Modern Web Experiences with  
            <span className="text-indigo-500"> Next.js & Tailwind</span>
          </h1>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Fast, scalable, and beautiful UI designed with clean code.  
            Create stunning websites powered by modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="btn bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6">
              Get Started
            </button>

            <button className="btn btn-outline border-gray-600 text-gray-300 hover:bg-gray-800 px-6">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/7w6YfQ2.png"
            alt="Hero Illustration"
            className="w-80 md:w-[420px] drop-shadow-lg rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
