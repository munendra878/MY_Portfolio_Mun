import "./Projects.css";

const projects = [
  {
    title: "MonStack Painter",
    image: "/assets/projects/pro2.jpeg",
    description:
      "A modern drawing and collaboration application featuring intuitive drawing tools and a responsive user experience.",
    live: "https://monstack-painter.vercel.app/",
    github: "https://github.com/munendra878/monstack-painter",
  },
  {
    title: "Fuel Consumption Analysis System",
    image: "/assets/projects/project3.jpeg",
    description:
      "A data-driven system for tracking, analyzing, and visualizing fuel usage to support informed decision-making.",
    live: "https://fuel-consumption-analysis.vercel.app/",
    github: "https://github.com/munendra878/fuel-consumption-analysis",
  },
  { 
    title: "Finance Dashboard",
    image: "/assets/projects/project4.jpeg",
    description:
      "A comprehensive financial management dashboard that provides insights into expenses, income, and budgeting.",
    live: "https://finance-dashboard-nine-drab.vercel.app/",
    github: "https://github.com/munendra878/finance-dashboard"
  }

];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚀 Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}