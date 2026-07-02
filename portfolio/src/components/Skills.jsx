import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

function Skills() {
  const skills = [
    // Programming Languages
    { name: "Java", icon: FaJava },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },

    // Frontend
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "React", icon: SiReact },

    // Database
    { name: "SQL", icon: FaDatabase },

    // Data Science
    { name: "NumPy", icon: FaDatabase },
    { name: "Pandas", icon: FaDatabase },
    { name: "Matplotlib", icon: FaDatabase },
    { name: "Scikit-Learn", icon: FaBrain },

    // AI & Machine Learning
    { name: "Machine Learning", icon: FaBrain },
    { name: "Generative AI", icon: FaBrain },
    { name: "LLMs", icon: FaBrain },
    { name: "RAG", icon: FaBrain },
    { name: "Prompt Engineering", icon: FaBrain },

    // Tools
    { name: "Git", icon: SiGit },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-section">
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon-wrap">
                <skill.icon className="skill-icon" />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;