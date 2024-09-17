import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdDataUsage } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import {Link} from "react-router-dom"

const Slidebar = () => {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar on mobile


  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleMenu2 =() => {
    setMenu2((prevState) => !prevState);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar on mobile
  };


  return (
    <div className="min-h-screen hidden lg:flex flex-col bg-gray-100 text-gray-800">
      {/* Mobile burger menu button */}
            <div className="lg:hidden flex items-center p-4 bg-white shadow-md">
        <button
          onClick={toggleSidebar}
          className="text-xl text-gray-800 focus:outline-none"
        >
          ☰
        </button>
        <span className="ml-4 text-lg font-semibold">Sidebar Menu</span>
      </div>


      <div className="fixed hidden md:flex flex-col top-0 left-0 w-[20%] bg-white h-full border-r shadow-lg">
        <div className="flex items-center justify-center h-16  text-black text-xl font-semibold shadow-md">
          Sidebar Menu
        </div>
        <div className="overflow-y-auto flex-grow">
          <ul className="flex flex-col py-4 space-y-2">
            <li className="px-5">
              <div className="flex flex-row items-center h-10">
                <div className="text-md font-semibold tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <Link to="/">
              <a
                href="#"
                className="relative flex flex-row items-center h-12 focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 pr-6 shadow-sm"
              >
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                <FaHome />
                </span>
                <span className="ml-4 text-lg tracking-wide truncate">
                  Home
                </span>
              </a>
            </Link>
            <li>
              <div className="relative">
                <button
                  onClick={handleMenu}
                  id="hs-dropdown-default"
                  type="button"
                  className="flex items-center gap-x-3 py-3 px-4 w-full text-lg font-medium bg-white text-left focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 shadow-sm"
                  aria-haspopup="menu"
                  aria-expanded={menu ? "true" : "false"}
                >
                   <span className="inline-flex justify-center items-center text-xl">
                  <FaFilter />
                </span>
                  Time
                  <svg
                    className={`w-5 h-5 ml-auto transition-transform duration-200 ${
                      menu ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {menu && (
                  <div className="relative left-0 mt-1 w-full bg-white shadow-sm rounded-lg p-2 z-10">
                    <a
                      className="block py-2 px-4 text-md text-gray-800 hover:bg-indigo-100 rounded-md"
                      href="#"
                    >
                      Day
                    </a>
                    <a
                      className="block py-2 px-4 text-md text-gray-800 hover:bg-indigo-100 rounded-md"
                      href="#"
                    >
                      Month
                    </a>
                    <a
                      className="block py-2 px-4 text-md text-gray-800 hover:bg-indigo-100 rounded-md"
                      href="#"
                    >
                      Year
                    </a>
                  </div>
                )}
              </div>
            </li>
            {/* Other sidebar items */}
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-12 focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 pr-6 shadow-sm"
              >
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  <FaTemperatureHigh />
                </span>
                <span className="ml-4 text-lg tracking-wide truncate">
                  Temperature
                </span>
                <span className="px-2 py-1 ml-auto text-sm font-semibold tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                  New
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-12 focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 pr-6 shadow-sm"
              >
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  <FaRegSnowflake />
                </span>
                <span className="ml-4 text-lg tracking-wide truncate">
                  Seasons
                </span>
              </a>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={handleMenu2}
                  id="hs-dropdown-default"
                  type="button"
                  className="flex items-center gap-x-3 py-3 px-4 w-full text-lg font-medium bg-white text-left focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 shadow-sm"
                  aria-haspopup="menu"
                  aria-expanded={menu2 ? "true" : "false"}
                >
                   <span className="inline-flex justify-center items-center text-xl">
                   <MdDataUsage />
                </span>
                  Usage
                  <svg
                    className={`w-5 h-5 ml-auto transition-transform duration-200 ${
                      menu2 ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {menu2 && (
                  <div className="relative left-0 mt-1 w-full bg-white shadow-sm rounded-lg p-2 z-10">
                    <a
                      className="block py-2 px-4 text-md text-gray-800 hover:bg-indigo-100 rounded-md"
                      href="#"
                    >
                      Industrial
                    </a>
                    <a
                      className="block py-2 px-4 text-md text-gray-800 hover:bg-indigo-100 rounded-md"
                      href="#"
                    >
                      Domestic
                    </a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/map"
                className="relative flex flex-row items-center h-12 focus:outline-none hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 pr-6 shadow-sm"
              >
                <span className="inline-flex justify-center items-center ml-4 text-2xl">
                <IoLocationSharp />
                </span>
                <span className="ml-4 text-lg tracking-wide truncate">
                  Map
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
