import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16 h-full">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>

            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Seth Marina Personal Portfolio
                </h2>

                <p className="mt-4 text-gray-700">
                  Location: Virginia Hampton Roads Metropolitan Area <br />
                  DOB: 06/04/2001
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
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>TailwindCSS</li>
              <li>Responsive Web Design</li>
              <li>API Development & Testing (Postman)</li>
              <li>Database Management (MongoDB Compass)</li>
              <li>Version Control (Git/GitHub)</li>
              <li>Agile Development Workflow</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">NA</h3>
              <p className="text-gray-700">
                If you're reading this steven or carter I am leaving this
                section blank for now becaus I don't actually know what I could
                put. I have a meeting with our career coach for resume and I will ask her then and make changes. I will also be leaving the projects route blank because I
                don't have any projects that are really worth showing yet. I
                plan to ask mary if I can use the capstone in there though when
                the time comes. this is in essence a rough draft because I will
                make major changes to this page before it's ever actually used I was just curious how fast development of the front end could be done when using open source components and react etc
              </p>
              <p className="text-gray-600">January 99BC - the futureeeee</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">NA</h3>
              <p className="text-gray-700">NA</p>
              <p className="text-gray-600">unknown time-unknownER time</p>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Software Development Certificate
              </h3>
              <p className="text-gray-700">
                Old Dominion University/ Upright Education
              </p>
              <p className="text-gray-600">Graduated in jan 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
