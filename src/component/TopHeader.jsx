'use client'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex bg-[#000000] text-white py-2 px-4 text-sm justify-center items-center">
        <div className="flex items-center font-bold gap-4 sm:gap-9 text-center">
          <span>We bring your ideal style to life!</span>
        </div>
      </div>

      <nav>
        <div className="py-4 px-4 md:px-8 flex justify-between items-center max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="/">
              <img src="/images/logo.png" alt="logo" className="w-16 md:w-20" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-6">
            <a href="#" className="text-[#242323] font-bold">CATALOG</a>
            <a href="#" className="text-[#242323] font-bold">ALL PRODUCTS</a>
            <a href="#" className="text-[#242323] font-bold">BEST SELLING</a>
            <a href="#" className="text-[#242323] font-bold">CONTACT</a>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 md:gap-6">
             {/* Login/Register (Visible on larger screens) */}
             <a
              href="#"
              className="hidden lg:flex items-center gap-2 bg-white py-1 px-2 rounded font-bold text-[#257F6E]"
            >
              <UserIcon className="w-5 h-5" />
              Login / Register
            </a>
            {/* Search */}
            <MagnifyingGlassIcon className="w-5 h-5 text-[#257F6E]" />
            {/* Cart */}
            <a href="/productpage" className="flex items-center">
              <ShoppingCartIcon className="w-5 h-5 text-[#257F6E]" />
              <span className="text-sm hidden md:block text-[#257F6E]">1</span>
            </a>
           
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="block lg:hidden text-gray-700 hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex justify-between items-center py-4 px-4 border-b border-gray-700">
            <h1 className="text-lg font-bold"></h1>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="py-4 px-4 flex flex-col gap-4">
            <a href="#" className="hover:text-[#257F6E]">CATALOG</a>
            <a href="#" className="hover:text-[#257F6E]">ALL PRODUCTS</a>
            <a href="#" className="hover:text-[#257F6E]">BEST SELLING</a>
            <a href="#" className="hover:text-[#257F6E]">CONTACT</a>
            <hr className="border-gray-700 my-2" />
            <div className="flex items-center gap-2 p-2 bg-white text-black rounded">
              <UserIcon className="w-5 h-5" />
              <a href="#" className="font-bold">Login / Register</a>
            </div>
          </div>
        </div>

        {/* Background overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </>
  );
};

export default TopHeader;
