import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {/* Facebook Icon */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} className="hover:bg-blue-700" />
        
        </a>

        {/* Twitter Icon */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="hover:bg-gray-800" />
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="hover:bg-red-600"/>
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2025 Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
