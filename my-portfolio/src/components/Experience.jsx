import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "QA Automation Engineer",
      company: "Auto Insurance Industry",
      duration: "Jan 2025 – Mar 2025",
      tasks: [
        "Developed comprehensive end-to-end data-driven tests for an insurance claims platform using Playwright.",
        "Created reusable Playwright utilities for login, dashboard, and form validation flows.",
        "Integrated CI/CD pipelines with GitHub Actions to run tests on pull requests automatically.",
        "Validated 120+ insurance claim scenarios using parameterized test cases, improving coverage and efficiency.",
        "Built React-based front-end test environments to simulate real-world user workflows.",
        "Performed API and UI validations to enhance platform stability and reduce bugs pre-deployment.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Hernandez Construction",
      duration: "Feb 2025 – Mar 2025",
      tasks: [
        "Designed a responsive website that increased site traffic by 128% and improved online presence.",
        "Used Framer Motion to enhance UX with smooth, visually appealing animations.",
        "Built mobile-first interfaces using ReactJS to ensure full cross-device accessibility.",
        "Integrated API services to optimize performance and minimize page load times.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Old Dominion University",
      duration: "Dec 2024 – Jan 2025",
      tasks: [
        "Engineered dynamic web components and layout using ReactJS for a student-led initiative.",
        "Secured user authentication via JWT, with Express and MongoDB for backend logic and storage.",
        "Streamlined API communication with Axios and tested endpoints with Postman.",
        "Worked closely with project sponsors to refine features and ensure stakeholder satisfaction.",
        "Maintained code integrity through Git and GitHub version control practices.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Upright Education",
      duration: "Jun 2024 – Jan 2025",
      tasks: [
        "Built a web-based real-time chat app with ReactJS (frontend) and Node.js/Express (backend).",
        "Enabled persistent messaging through MongoDB and implemented WebSocket for live updates.",
        "Used JWT for secure user authentication and account protection.",
        "Applied Git version control to manage multiple branches and features efficiently.",
      ],
    },
    {
      title: "Insurance Specialist",
      company: "Progressive / Liberty Mutual",
      duration: "Jun 2021 – Present",
      tasks: [
        "Managed large volumes of sensitive client data with a focus on accuracy, security, and compliance.",
        "Optimized claims processes to shorten turnaround times and improve customer satisfaction.",
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
