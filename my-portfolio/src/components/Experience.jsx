import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "React Software Developer",
      company: "Hernandez Construction",
      duration: "Feb 2025 – Mar 2025",
      tasks: [
        "Designed and developed a website to bolster the company’s online presence and brand visibility.",
        "Implemented Framer Motion to create smooth animations and enhance user experience.",
        "Implemented mobile-responsive design, ensuring accessibility across all devices for an optimal experience using ReactJS.",
      ],
    },
    {
      title: "Hands Together Project",
      company: "Old Dominion University",
      duration: "Dec 2024 – Jan 2025",
      tasks: [
        "Designed and implemented front-end components for web post creation, user authentication, and navigation using ReactJS, resulting in a responsive website design.",
        "Implemented user authentication with JWT and MongoDB on the back-end, using Express and Mongoose.",
        "Ensured secure data handling and seamless API communication with Axios.",
        "Utilized Postman for API testing and Git for version control, maintaining code quality and version history.",
        "Liaised with sponsors and stakeholders to discuss and align on project decisions, ensuring a seamless user experience and client satisfaction.",
      ],
    },
    {
      title: "Student Developer",
      company: "Upright Education",
      duration: "Jul 2024 – Jan 2025",
      tasks: [
        "Completed weekly projects during a fully immersive software development course.",
        "Created a web-based real-time chat app using ReactJS for the front-end and Node.js with Express for the back-end.",
        "Incorporated user sign-up/login, multiple chat rooms, and message persistence with MongoDB into the app.",
        "Utilized JWT for secure user authentication and WebSocket for real-time communication.",
        "Employed Git for version control and focused on optimizing code performance and usability across all projects.",
      ],
    },
    {
      title: "Insurance Specialist",
      company: "Progressive/Liberty Mutual",
      duration: "Jun 2021 – Present",
      tasks: [
        "Managed large client datasets, ensuring data accuracy and compliance with regulations.",
        "Applied problem-solving and analytical thinking to provide customer-focused insurance solutions.",
      ],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-zinc-900"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {exp.title} | {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              {exp.duration}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
