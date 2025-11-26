"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // later NextAuth দিয়ে replace হবে
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full shadow-md sticky top-0 left-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/items" className="hover:text-blue-600">Items</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>

          {/* LOGIN / PROFILE */}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Login / Register
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                <span>Hi, User</span>
                <span>▼</span>
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-44 py-2">
                  <Link
                    href="/add-product"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/items" className="block hover:text-blue-600">Items</Link>
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <Link href="/contact" className="block hover:text-blue-600">Contact</Link>

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
            >
              Login / Register
            </Link>
          ) : (
            <div className="space-y-2">
              <Link
                href="/add-product"
                className="block px-4 py-2 bg-gray-200 rounded-lg"
              >
                Add Product
              </Link>
              <Link
                href="/manage-products"
                className="block px-4 py-2 bg-gray-200 rounded-lg"
              >
                Manage Products
              </Link>
              <button
                className="block w-full px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
