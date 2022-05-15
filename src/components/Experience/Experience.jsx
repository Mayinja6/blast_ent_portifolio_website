import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { orangeThemeDark as theme } from "../../utils/theme";
import { expOrange } from "../../assets";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Globex Corporation",
      jobtitle: "Frontend Developer",
      startYear: "2018",
      endYear: "2019",
    },
    {
      id: 2,
      company: "Vehement Capital Partners",
      jobtitle: "Backend Developer",
      startYear: "2019",
      endYear: "2020",
    },
    {
      id: 3,
      company: "Wonka Industries",
      jobtitle: "Marketing",
      startYear: "2020",
      endYear: "Present",
    },
  ];

  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={expOrange} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
