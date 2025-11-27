"use client";
import React from "react";

export default function Login() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-10 shadow-xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Login to continue accessing your dashboard
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-gray-100"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-500 text-gray-100"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-semibold"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-4">
          <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 transition rounded-lg text-gray-200 font-medium flex items-center justify-center gap-3">
            <span>🔐</span>
            Login with Google
          </button>

          <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 transition rounded-lg text-gray-200 font-medium flex items-center justify-center gap-3">
            <span>💼</span>
            Login with GitHub
          </button>
        </div>

        {/* Bottom Link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <span className="text-indigo-400 hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </section>
  );
}
