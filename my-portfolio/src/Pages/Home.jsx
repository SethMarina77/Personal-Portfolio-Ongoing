import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="h-full">
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
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Seth Marina Personal Portfolio
                </h2>

                <p className="mt-4 text-gray-700">
                  Location: Virginia Hampton Roads Metropolitan Area <br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              My goal is simple
              <span className="sm:block">
                {" "}
                to create a seamless user experience{" "}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              I have been passionate about software development for as long as I
              can remember, with a deep-rooted interest in technology that began
              in my childhood. Growing up, I was fascinated by how tech could
              simplify life and bring people together. This curiosity led me to
              pursue programming, where I found a love for building intuitive,
              user-focused solutions. I am always thinking of ways to enhance
              the user experience, ensuring that the tools and applications I
              create are not just functional but also enjoyable and accessible
              for everyone.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/Projects"
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Projects Directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[url(https://images.unsplash.com/photo-1731525545250-256103aa1bfc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Virtual
              <strong className="block font-extrabold">Resume</strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Below you will find my "Web Resume", a shortened version of my
              actual resume with highlights of some of my core skills
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center"></div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 font-sans">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold">Seth Marina</h1>
            <p className="text-gray-600">Software Engineer</p>

            <hr className="my-4" />

            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">
              Dynamic and detail-oriented Full-Stack Developer with proven
              expertise in building scalable, user-centric web applications.
              Proficient in modern technologies, including React.js, JavaScript,
              HTML, CSS, TailwindCSS, and the MERN stack (MongoDB, Express.js,
              React.js, Node.js). Experienced in API development and testing
              using tools like Postman and database management with MongoDB
              Compass. Adept at leveraging Git/GitHub for efficient version
              control and collaboration. Known for a passion for intuitive
              design and creating seamless user experiences, with a strong focus
              on performance optimization and responsive design. Excels in team
              environments, actively contributing to agile workflows and
              cross-functional projects. Continuously learning and integrating
              new technologies to enhance development processes and deliver
              impactful solutions.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML/CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>React Router</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>RESTful APIs / JSON</li>
              <li>JWT (Authentication & Authorization)</li>
              <li>Scrum</li>
              <li>Agile Development Workflow</li>
              <li>Software Development Life Cycle (SDLC)</li>
              <li>Middleware Development</li>
              <li>API Development & Testing (Postman)</li>
              <li>Database Management (MongoDB Compass)</li>
              <li>Version Control (Git/GitHub)</li>
              <li>Git Bash</li>
              <li>Trello</li>
              <li>Axios</li>
              <li>WebSockets</li>
              <li>Debugging</li>
              <li>Leadership</li>
              <li>Network Configuration</li>
              <li>TailwindCSS</li>
              <li>Responsive Web Design</li>
              <li>PostgresQL</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Hands Together - Charity Platform
              </h3>
              <p className="text-gray-700">
                I played a key role in developing Hands Together, a
                user-friendly charity platform that helps users discover local
                charities. I designed and implemented frontend components for
                charity post creation, user authentication, and navigation using
                React.js, ensuring a responsive and seamless user experience. On
                the backend, I integrated JWT authentication with MongoDB using
                Express and Mongoose, enabling secure data handling and
                efficient API communication with Axios. I leveraged Postman for
                thorough API testing and maintained version control with Git to
                ensure code quality. Leading the development of both the
                frontend and backend, I ensured smooth integration between the
                React client and Express server. Additionally, I collaborated
                with sponsors and stakeholders to align project decisions with
                user needs, enhancing the platform’s usability and
                effectiveness.
              </p>
              <p className="text-gray-600">December 2024 - January 2025</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Student Developer Upright Education / Old Dominion University
              </h3>
              <p className="text-gray-700"></p>
              <p className="text-gray-600">
                I want to preface this with a little about me, I have been
                Coding far before I decided to pursue a formal education. From
                July 2024 to January 2025, I completed weekly projects as part
                of a fully immersive software development course, gaining
                hands-on experience in full-stack development. I developed a
                web-based real-time chat application using React.js for the
                frontend and Node.js with Express.js for the backend,
                integrating user authentication with JWT and enabling real-time
                communication with WebSockets. Additionally, I built an
                interactive Jeopardy board game using HTML, CSS, and JavaScript,
                incorporating game logic, player score tracking, and user
                interaction features. Throughout these projects, I utilized Git
                for version control, ensuring efficient collaboration and
                maintainable codebases while optimizing performance and
                usability.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2">Education</h2>
            <p className="text-gray-700">Old Dominion University 2025</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">
                Software Development Certificate(s)
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                <li>Express MongoDB Back-end Development - ODU</li>
                <li>
                  Full-Stack JavaScript Software Development Bootcamp Completion
                  - ODU
                </li>
                <li>JavaScript Development Foundations - ODU</li>
                <li>React Front-end Development - ODU</li>
                <li>
                  MTA: HTML5 Application Development Fundamentals - Certified
                  2017
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
