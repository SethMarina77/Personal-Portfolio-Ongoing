import React from "react";
import { Link } from "react-router-dom";
import img1 from "../pictures/Img1.png";
import img2 from "../pictures/Img2.png";
import img3 from "../pictures/Img3.png";

//Hyper Ui was used to aid with some tailwind components
const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Seth Marina
            </h1>

            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
              Personal Portfolio page
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a target="_blank" href="https://github.com/SethMarina77">
              <img
                className="w-14 h-14 transition transform hover:scale-110"
                src={img1}
                alt="Profile"
              />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/seth-marina77/"
            >
              <img
                className="w-14 h-14 transition transform hover:scale-110"
                src={img2}
                alt="Profile"
              />
            </a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li className=" p-2 rounded">
                <Link to="/" className="group-hover:text-gray-300">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Home
                    </span>
                  </button>
                </Link>
              </li>

              <li className=" p-2 rounded">
                <Link to="/Projects" className="group-hover:text-gray-300">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Projects
                    </span>
                  </button>
                </Link>
              </li>
              <li className=" p-2 rounded">
                <Link to="/MoreAboutMe" className="group-hover:text-gray-300">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Contact
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <a href="/SethMarinaResume.pdf" download="sethMarinaCSV.pdf">
            <button className="text-white">
              <img
                className="w-14 h-14 transition transform hover:scale-110"
                src={img3}
                alt="DownloadCSV"
              ></img>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
