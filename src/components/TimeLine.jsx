const TimeLine = () => {
  const timelineItems = [
    {
      year: "2023",
      title: "Started My Coding Journey",
      taught: "Self-taught",
      description:
        "Began learning HTML, CSS, and JavaScript through online tutorial(Udemy) and building small projects.",
    },
    {
      year: "2024",
      title: "Dived Into Backend Development",
      taught: "",
      description:
        "Started learning Java and Python, explored API development with Spring Boot and FastAPI, implemented authentication with JWT, and worked with relational and NoSQL databases like PostgreSQL and MongoDB. Built several scalable backend services, integrated third-party APIs, and focused on writing clean, maintainable server-side code.",
    },
    // {
    //   year: "2024",
    //   title: "Built Real Projects",
    //   taught: " ",
    //   description:
    //     "Worked on full-stack applications, and strengthened collaboration and version control skills using Git and GitHub. Focused on writing clean, maintainable code and working in team-based environments.",
    // },
    {
      year: "2024",
      title: "Becoming a Software Engineer",
      taught: "Semicolon Africa",
      description:
        "Building scalable applications, contributing to impactful projects, and continuously expanding my skills.",
    },

    {
      year: "2025",
      title: "Business Management",
      taught: "Henley Business School (UK)",
      description:
        "Completed a comprehensive program in business management, gaining expertise in leadership, strategic planning, financial management, and organizational development. Developed skills in problem-solving, effective communication, and decision-making while working on real-world business case studies and collaborative projects, preparing me for impactful roles in business leadership and management.",
    },

    {
      year: "2025",
      title: "Computer Science Degree",
      taught: "Semicolon Africa",
      description:
        "Graduated with honors from Semicolon Africa. Gained in-depth knowledge of software engineering, algorithms, system design, and agile methodologies. Completed real-world projects, collaborated effectively with teams, and developed strong problem-solving and communication skills that prepared me for professional roles in software engineering.",
    },
  ];

  return (
    <div className="p-6 text-left">
      <h3 className="text-2xl font-semibold mb-4 text-blue-500">My Journey</h3>
      <ul className="space-y-6 border-l-2 border-blue-600 pl-8 relative">
        {timelineItems.map((item, index) => (
          <li
            key={index}
            className="relative hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-950" />
            <div className="bg-slate-900 p-4 rounded-lg shadow-md">
              <p className="text-sm text-blue-400">{item.year}</p>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              {item.taught && (
                <p className="text-blue-500 text-sm mt-1 py-1">{item.taught}</p>
              )}
              <p className="text-stone-300 text-sm mt-1">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
