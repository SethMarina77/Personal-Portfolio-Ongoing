import React from "react";

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <button
            onClick={scrollToTop} 
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start dark:text-teal-300">
              Contact Info
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400">
              Email: SethMarina53@gmail.com<br/>
              Phone Number: (757)-940-1218
            </p>
          </div>
            
          <div className="mt-12 flex justify-center gap-8 md:gap-12 lg:mt-0 lg:justify-end">
            
            <a
              href="https://github.com/SethMarina77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition transform hover:scale-110 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              aria-label="Visit my GitHub profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.478 0 0 4.478 0 10c0 4.418 2.865 8.166 6.839 9.499.5.092.682-.217.682-.482 0-.238-.009-.869-.014-1.708-2.782.604-3.373-1.341-3.373-1.341-.456-1.161-1.111-1.473-1.111-1.473-.91-.624.069-.611.069-.611 1.003.071 1.53 1.032 1.53 1.032.89 1.522 2.339 1.083 2.91.826.091-.647.349-1.083.634-1.333-2.219-.252-4.55-1.11-4.55-4.93 0-1.088.388-1.98 1.027-2.674-.103-.252-.445-1.268.098-2.642 0 0 .835-.268 2.734 1.021A9.906 9.906 0 0110 3.244c.844 0 1.693.095 2.487.278 1.898-1.29 2.734-1.021 2.734-1.021.543 1.374.201 2.39.098 2.642.639.694 1.027 1.586 1.027 2.674 0 3.829-2.331 4.678-4.551 4.93.688.591 1.311 1.788 1.311 3.609 0 2.603-.023 4.694-.023 5.324 0 .267.181.576.689.482A9.96 9.96 0 0020 10c0-5.522-4.478-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

           
            <a
              href="https://www.linkedin.com/in/seth-marina-28b8a7202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition transform hover:scale-110 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              aria-label="Visit my LinkedIn profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.25 0h-12.5A3.75 3.75 0 000 3.75v12.5A3.75 3.75 0 003.75 20h12.5A3.75 3.75 0 0020 16.25V3.75A3.75 3.75 0 0016.25 0zm-9.375 12.5H5.625v-6.25h1.25v6.25zM5.625 4.375h-1.25v-.625c0-.137.112-.25.25-.25h.75c.138 0 .25.112.25.25v.625h-1.25zM16.25 12.5h-1.25v-3.125c0-1.125-.25-1.875-1.25-1.875-1 0-1.25.75-1.25 1.875v3.125h-1.25v-6.25h1.25v.875c.25-.5.75-.875 1.25-.875 1.5 0 2.5 1 2.5 3.5v3.75z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
