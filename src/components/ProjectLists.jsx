import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Skill swap africa",
    description:
      "A dynamic skill exchange platform connecting users across Africa to swap expertise and learn new skills. Features secure authentication, user profiles with skills offered/wanted, real-time chat, instant notifications, and a robust system for managing swap requests and reviews. Built to foster community learning and personal growth.",
    imageUrl: "project-11.png",
    tags: [],
    demoLink: "https://skillswap-africa-app.vercel.app/",
    codeLink: "https://github.com/Enenche124/skill-swap-africa",
  },
  {
    title: "Student Course Management System",
    description:
      "A role-based course management platform for admins, lecturers, and students. Features include course creation and lecturer assignment (admin), student enrollment viewing and scoring (lecturers), and grade, position, and result viewing (students). Fully responsive design for seamless access across devices.",
    imageUrl: "project-12.png",
    tags: [],
    demoLink: "https://frontend-student-one.vercel.app/login.html",
    codeLink: "",
  },
  {
    title: "Library Management System",
    description:
      "A comprehensive library management platform. It supports user and admin authentication, book catalog management, borrowing and return tracking, fine calculation, and payment processing. Designed with a clean and responsive UI for seamless user experience, and a scalable backend architecture ready for database and API integration.",
    imageUrl: "project-13.png",
    tags: [],
    codeLink: "https://github.com/Enenche124/apostle-library-management",
  },
  {
    title: "Bank App",
    description:
      "A secure and user-friendly banking application that allows users to register, log in, manage accounts, check balances, transfer funds, and reset passwords. Features include JWT-based authentication, savings account creation, password encryption, email notifications, and integration with a Flutter mobile frontend for a seamless cross-platform experience.",
    imageUrl: "project-15.png",
    tags: [],
    codeLink: "https://github.com/Enenche124/advance-banking-system",
  },
];

const ProjectLists = () => {
  return (
    <section className="px-5 text-white pt-16">
      <div className="text-center pb-10">
        <h2 className="font-bold mb-3 text-4xl text-blue-500">
          Recents <span className="text-white">Projects</span>
        </h2>
        <p className="text-stone-400">
          A collection of projects that showcase my expertise in building modern
          web applications and solving complex problems
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectLists;
