import htIMG1 from "../pictures/BROWSE.jpg";
import htIMG2 from "../pictures/HC.jpg";
import { useEffect } from "react";

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      

      <div
        id="projectsSection"
        className="h-[100vh] font-sans dark:bg-neutral-900 px-6 py-12 overflow-hidden flex items-center justify-center"
      >
        <div className="max-w-7xl max-md:max-w-md mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">
                Hands Together Charity Platform
              </h2>
              <p className="text-white mt-6 text-base leading-relaxed">
                Hands Together is a charity platform designed to connect users
                with causes they're passionate about while enabling charities to
                post about upcoming events, needs, and initiatives. The platform
                ensures a secure environment with admin moderation to manage
                inappropriate users and content, fostering a positive and
                supportive community for both charities and individuals.
              </p>
            </div>
            <div>
              <img
                src={htIMG1}
                className="shrink-0 w-full h-full  rounded-md object-contain"
              />
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById("videoPreview1").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white "
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View Demo
            </span>
          </button>
        </div>
      </div>

      <section
        id="videoPreview1"
        className="relative bg-[url(https://images7.alphacoders.com/120/thumb-1920-1205979.png)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-between">
          {/* Text Section */}
          <div className="max-w-xl text-center sm:text-left lg:w-1/2">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Project
              <strong className="block font-extrabold">Demo</strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Here is a short demo of the project in action. Scroll down to see
              the next project
            </p>
          </div>

          {/* Video Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
            <div className="w-full max-w-2xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/L-CGCwRPA-s?si=F7hQ9fSt7_ZeaQBn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div
        id="project2"
        className="h-[100vh] font-sans dark:bg-neutral-900 px-6 py-12 overflow-hidden flex items-center justify-center"
      >
        <div className="max-w-7xl max-md:max-w-md mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">
                Hernandez Construction
              </h2>
              <p className="text-white mt-6 text-base leading-relaxed">
                Hernandez Construction is a construction company that offers a
                variety of services including roofing, siding, and windows. The
                website is designed to showcase the company's work and services,
                as well as provide a way for customers to contact the company
                for a quote or more information.
              </p>
            </div>
            <div>
              <img
                src={htIMG2}
                className="shrink-0 w-full h-full  rounded-md object-contain"
              />
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById("videoPreview2").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white "
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View Demo
            </span>
          </button>
        </div>
      </div>
      <section
        id="videoPreview2"
        className="relative bg-[url(https://images.alphacoders.com/113/thumb-1920-1130469.png)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-between">
          {/* Text Section */}
          <div className="max-w-xl text-center sm:text-left lg:w-1/2">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Project
              <strong className="block font-extrabold">Demo</strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Here is a short demo of the project in action.
            </p>
          </div>

          {/* Video Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
            <div className="w-full max-w-2xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7EMwW9-U28E?si=q5raUDqXeteDgiUS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
