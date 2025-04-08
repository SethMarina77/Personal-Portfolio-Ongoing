import { Link } from "react-router-dom";
import { useEffect } from "react";
import Experience from "../components/Experience";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="h-full bg-neutral-900">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-3">
              <img
                src="https://images2.alphacoders.com/137/thumb-1920-1372963.png"
                className="rounded"
                alt=""
              />
            </div>

            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-200 sm:text-3xl">
                  Seth Marina Personal Portfolio
                </h2>

                <p className="mt-4 text-gray-200">
                  Location: Virginia Hampton Roads Metropolitan Area <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-neutral-900 font-sans">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-zinc-950 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-200">
              Seth Marina
            </h1>
            <p className="text-gray-200">Software Engineer</p>

            <hr className="my-4" />

            <h2 className="text-xl font-semibold mb-2 text-gray-200">
              Summary
            </h2>
            <p className="text-gray-200">
              Full-Stack Developer with expertise in React, JavaScript,
              TailwindCSS, and the MERN stack. Proficient in API development,
              database management, and version control with Git/GitHub. Focused
              on building efficient, user-friendly applications with clean,
              maintainable code. Adaptable team player who quickly learns new
              technologies to improve development workflows.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
              Skills
            </h2>
            <ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-4">
              <li class="border rounded-full px-3 py-1 text-center text-white bg-red-500 border-red-500">
                HTML/CSS
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-blue-500 border-blue-500">
                JavaScript
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-green-500 border-green-500">
                PostgreSQL
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-teal-500 border-teal-500">
                Playwright Automation
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-yellow-500 border-yellow-500">
                TypeScript
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-purple-500 border-purple-500">
                React.js
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-pink-500 border-pink-500">
                React Router
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-indigo-500 border-indigo-500">
                JWT
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-teal-500 border-teal-500">
                Scrum
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-orange-500 border-orange-500">
                Agile
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-cyan-500 border-cyan-500">
                SDLC
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-lime-500 border-lime-500">
                Middleware
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-rose-500 border-rose-500">
                API Testing
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-amber-500 border-amber-500">
                MongoDB
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-fuchsia-500 border-fuchsia-500">
                Node.js
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-violet-500 border-violet-500">
                Express.js
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-gray-500 border-gray-500">
                REST APIs
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-sky-500 border-sky-500">
                Mongoose
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-blue-600 border-blue-600">
                Git
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-green-600 border-green-600">
                Git Bash
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-red-600 border-red-600">
                Axios
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-indigo-600 border-indigo-600">
                WebSockets
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-yellow-600 border-yellow-600">
                Debugging
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-purple-600 border-purple-600">
                Leadership
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-pink-600 border-pink-600">
                Networking
              </li>
              <li class="border rounded-full px-3 py-1 text-center text-white bg-teal-600 border-teal-600">
                TailwindCSS
              </li>
            </ul>

            <Experience />

            <section className="bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-2 mb-4">
                Education
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Old Dominion University{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    • Class of 2025
                  </span>
                </h3>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 mb-3">
                  Software Development Certifications
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-400">
                  <li className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
                    🚀 Express MongoDB Back-end Development - ODU
                  </li>
                  <li className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
                    🖥️ Full-Stack JavaScript Development Bootcamp - ODU
                  </li>
                  <li className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
                    ⚡ JavaScript Development Foundations - ODU
                  </li>
                  <li className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
                    🎨 React Front-end Development - ODU
                  </li>
                  <li className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
                    📜 MTA: HTML5 App Development Fundamentals - Certified 2017
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
