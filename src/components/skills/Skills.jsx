import "./skills.css";
import Marquee from "react-fast-marquee";
import { orangeThemeDark as theme } from "../../utils/theme";
import { skillsImage } from "../../utils/customElements";

const Skills = () => {
  const skillsData = [
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Premiere Pro",
    "Adobe Audition",
    "Microsoft Office",
    "Sketch",
  ];

  const skillBoxStyle = {
    fontFamily: "initial",
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };
  return (
    <div
      className="skills"
      style={{ backgroundColor: theme.secondary }}
      id="contact"
    >
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
