import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <Link
            to="/about"
            className="text-lg hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <p className="text-center text-sm">Created By Siraj Shaikh</p>
      </div>
    </footer>
  );
};

export default Footer;
