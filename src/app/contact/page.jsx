"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Contact <span className="text-indigo-500">Us</span>
        </h1>
        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, projects, or service inquiries.  
          We are always here to help you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

          {/* Contact Info */}
          <div className="space-y-8">
            
            <div>
              <h3 className="text-2xl font-bold text-white">📍 Office Location</h3>
              <p className="text-gray-400 mt-2">
                Dhaka, Bangladesh  
                <br /> Road 12, Block C
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">📞 Call Us</h3>
              <p className="text-gray-400 mt-2">+880 1234 567 890</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">📧 Email</h3>
              <p className="text-gray-400 mt-2">support@serviceweb.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">🌐 Social Media</h3>
              <div className="flex space-x-4 text-3xl mt-3">
                <a className="hover:text-white transition">🐦</a>
                <a className="hover:text-white transition">📘</a>
                <a className="hover:text-white transition">📸</a>
                <a className="hover:text-white transition">💼</a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 border border-gray-700 rounded-2xl p-10 space-y-6 shadow-lg">

            <div>
              <label className="block mb-2 text-gray-300 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-gray-100"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-gray-100"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-gray-100"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
