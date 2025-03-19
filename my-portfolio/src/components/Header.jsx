import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../pictures/Img1.png";
import img2 from "../pictures/Img2.png";
import img3 from "../pictures/Img3.png";

// Hyper UI was used to aid with some Tailwind components
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-zinc-950 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Seth Marina
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Personal Portfolio
            </p>
          </div>

          {/* Social Links (Always Visible) */}
          <div className="flex items-center gap-4">
            <a target="_blank" href="https://github.com/SethMarina77">
              <img
                className="w-10 h-10 transition transform hover:scale-110"
                src={img1}
                alt="GitHub"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/seth-marina77/"
            >
              <img
                className="w-10 h-10 transition transform hover:scale-110"
                src={img2}
                alt="LinkedIn"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navigation & Resume Button (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex space-x-4">
                {["Home", "Projects", "Contact"].map((item, index) => (
                  <li key={index} className="p-2 rounded">
                    <Link to={`/${item === "Home" ? "" : item}`}>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          {item}
                        </span>
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resume Button */}
            <a href="/SethMarinaResume.pdf" download="sethMarinaCSV.pdf">
              <button>
                <img
                  className="w-10 h-10 transition transform hover:scale-110"
                  src={img3}
                  alt="Resume"
                />
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col items-center gap-3">
            <nav>
              <ul className="flex flex-col items-center space-y-3">
                {["Home", "Projects", "Contact"].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item === "Home" ? "" : item}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <button className="w-full px-4 py-2 text-gray-900 dark:text-white rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white">
                        {item}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resume Button in Mobile Menu */}
            <a
              href="/SethMarinaResume.pdf"
              download="sethMarinaCSV.pdf"
              className="mt-2"
            >
              <button className="flex items-center gap-2 text-gray-900 dark:text-white">
                <img
                  className="w-10 h-10 transition transform hover:scale-110"
                  src={img3}
                  alt="Resume"
                />
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
