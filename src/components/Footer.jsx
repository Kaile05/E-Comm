import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white shadow-lg py-6 mt-10 w-full bottom-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="text-xl font-bold">
          <span className="text-gray-600">Binge</span>Buy
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li><Link to="/" className="hover:text-gray-600 transition">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-600 transition">Products</Link></li>
          <li><Link to="/cart" className="hover:text-gray-600 transition">Cart</Link></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xl text-gray-700 hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="#" className="text-xl text-gray-700 hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="text-xl text-gray-700 hover:text-blue-400 transition"><FaTwitter /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} BingeBuy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
