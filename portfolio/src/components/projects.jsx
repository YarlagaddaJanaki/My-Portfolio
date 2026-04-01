function Projects() {
  const projects = [
    {
      title: "AI-Powered LinkedIn Post Generator",
      stack: "Python, LangChain, Streamlit, LLaMA (Groq)",
      desc: "Generates structured LinkedIn posts from user-selected topic, length, and language using LLMs.",
      github: "https://github.com/YarlagaddaJanaki/Linkedin-post-generator",
    },
    {
      title: "Task Scheduler App",
      stack: "ReactJS, JavaScript, CSS, LocalStorage",
      desc: "Responsive task manager with LocalStorage persistence for reliable day-to-day planning.",
      github: "https://github.com/YarlagaddaJanaki/Task-Scheduler",
    },
    {
      title: "Fraud Detection System",
      stack: "Python, Scikit-Learn, Pandas, Streamlit",
      desc: "ML-based fraud detection pipeline with a Streamlit app for real-time transaction prediction.",
      github: "https://github.com/YarlagaddaJanaki/Fraud-Detection-System",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((p, index) => (
          <div className="card project-card" key={index}>
            <h3>{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech-pills">
              {p.stack.split(", ").map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a
                className="project-link"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;