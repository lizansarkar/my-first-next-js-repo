"use client";

import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("সবগুলো ঘর পূরণ করুন!");
      return;
    }
    alert("Register Successful!");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#111827] px-3">
      <form
        onSubmit={handleRegister}
        className="bg-[#1f2937] border border-[#1f1f1f] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-[#1a1a1a] border border-[#2b2b2b] text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#1a1a1a] border border-[#2b2b2b] text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-[#1a1a1a] border border-[#2b2b2b] text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition font-semibold"
        >
          Register
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
