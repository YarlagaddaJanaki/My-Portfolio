import {
  SiC,
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: SiPython },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "SQL", icon: FaDatabase },
    {name: "Pandas", icon: FaDatabase},
    {name : "Numpy", icon: FaDatabase},
    {name:"Matplotlib", icon: FaDatabase},
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