import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <p className="mt-2">123 Main Street, City, Country</p>
            <p className="mt-1">Phone: (123) 456-7890</p>
            <p className="mt-1">Email: info@example.com</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <a href="#" className="mt-2 text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="#" className="mt-1 text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="mt-1 text-gray-300 hover:text-white">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
