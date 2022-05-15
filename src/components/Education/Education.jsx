import "./Education.css";
import EducationCard from "./EducationCard";
import { orangeThemeDark as theme } from "../../utils/theme";
import { eduImg } from "../../assets";

function Education() {
  const educationData = [
    {
      id: 1,
      institution: "Marble Hills Middle School",
      course: "Higher Secondary Education",
      startYear: "2007",
      endYear: "2015",
    },
    {
      id: 2,
      institution: "Somerset School of Science",
      course: "Bachelor of Technology",
      startYear: "2015",
      endYear: "2019",
    },
    {
      id: 3,
      institution: "Hawking University, Cambridge",
      course: "Master of Technology",
      startYear: "2019",
      endYear: "Present",
    },
  ];

  return (
    <div
      className="education"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{ color: theme.primary }}>Education</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="education-image">
          <img src={eduImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
