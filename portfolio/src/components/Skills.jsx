import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
} from "react-icons/si";

import { FaDatabase, FaJava, FaChartLine } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

function Skills() {
  const skills = [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },

    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "React", icon: SiReact },

    { name: "SQL", icon: FaDatabase },
    { name: "Git", icon: SiGit },

    { name: "NumPy", icon: FaChartLine },
    { name: "Pandas", icon: FaChartLine },
    { name: "Matplotlib", icon: FaChartLine },
    { name: "Scikit-Learn", icon: FaBrain },

    { name: "Machine Learning", icon: FaBrain },
    { name: "Generative AI", icon: FaBrain },
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