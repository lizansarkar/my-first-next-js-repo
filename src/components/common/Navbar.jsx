"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-[#2b3440] text-gray-200 px-4 shadow-md sticky top-0 z-50">

      {/* Left - Logo */}
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          Lizan
        </Link>
      </div>

      {/* Center - Menu for Desktop */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-gray-300">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right - Button */}
      <div className="navbar-end">
        <Link href="/login" className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-none text-white rounded-lg px-4">
        Login
        </Link>
        <Link href="/register" className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-none text-white rounded-lg px-4 ml-10">
        Register
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden navbar-end ml-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-white">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] bg-gray-800 text-gray-200 rounded-box w-48 shadow-lg"
          >
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}
