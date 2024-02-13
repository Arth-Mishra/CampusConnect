import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

import Feeds from "../Feed/Feeds";
import PostForm from "../PostForm/PostForm";

const Sidebar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-blue-950 overflow-hidden">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

              <Link to="/home" className="flex ms-2 md:me-24">
                <img
                  src="src/assets/C.png"
                  className="h-12 w-12 ml-4  hover:scale-105 border border-white rounded-full bg-slate-600"
                  alt="CampusConnect Logo"
                />
              </Link>
            </div>
            <div>
              <p className="font-bold font-serif text-white text-3xl">
                CampusConnect
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-6 rounded-3xl hover:scale-110 ">
                <Link to="/PostFeedback">
                  <i className="fa-solid fa-pen ml-1 hover:text-cyan-300 text-white "></i>
                </Link>
              </div>
              <div className=" hover:scale-105 flex items-center ms-4 font-semibold hover:text-cyan-500 cursor-pointer text-white">
                <span>About</span>
              </div>
              <div>
                <div
                  className=" hover:scale-105 flex items-center ms-4 font-semibold hover:text-cyan-500 cursor-pointer text-white"
                  s
                >
                  {/* <Link to="/profile">
                    <img
                      id="dropdownHoverButton"
                      type="button"
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      data-dropdown-placement="bottom-start"
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4AhCCgcbwRr3UyrRRZ8BI6CSwNKCsIFa8TCaHXCYAA&s"
                      alt="User dropdown"
                    />
                  </Link> */}
                  <i className="fa-solid fa-user pt-1 w-12"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="dropdownHover"
        className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Nikhil Sharma</div>
          <div className="text-orange-500 font-medium truncate">
            nksharma@gmail.com
          </div>
        </div>
        <ul
          className=" text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Account
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>

      {/* Side Bar  */}

      <aside
        id="logo-sidebar"
        className=" bg-blue-950 fixed top-2 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-fullz border-r sm:translate-x-"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 bg-blue-950">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/home"
                className="flex items-center p-4 rounded-lg dark:text-white hover:bg-cyan-600"
              >
                <FaHome className="w-6 h-6" />
                <span className="ms-3 ">Home</span>
              </Link>
            </li>

            <li>
              <Link
                to="/Connect"
                className="flex items-center p-4 rounded-lg dark:text-white hover:hover:bg-cyan-600"
              >
                <RiGroupFill className="w-8 h-6" />
                <button
                  id="dropdownHoverButton"
                  className="px-3 text-center inline-flex items-center w-64 transition duration-700 ease-in-out"
                >
                  Community
                </button>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="flex items-center p-4 rounded-lg dark:text-white hover:hover:bg-cyan-600"
              >
                <FaDatabase className="w-8 h-6" />
                <button
                  id="dropdownHoverButtons"
                  className="px-3 text-center inline-flex items-center w-64 transition duration-700 ease-in-out"
                >
                  Supplies
                </button>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="flex items-center p-4 rounded-lg dark:text-white hover:hover:bg-cyan-600 "
              >
                <FaFeatherPointed className="w-8 h-6" />
                <button
                  id="dropdownHoverButtons"
                  className="px-3 text-center inline-flex items-center w-64 transition duration-700 ease-in-out"
                >
                  Internship
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center mt-52 p-4 rounded-lg dark:text-white hover:hover:bg-cyan-600 "
              >
                <IoLogOut className="w-8 h-6" />
                <button
                  id="dropdownHoverButtons"
                  className="px-3 text-center inline-flex items-center w-64 transition duration-700 ease-in-out"
                >
                  Log Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* <div className="p-6 sm:ml-64">
                   <Feeds/>
                   <PostForm/>
            </div> */}
    </>
  );
};

export default Sidebar;
