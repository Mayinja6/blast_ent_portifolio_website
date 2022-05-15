import Fade from "react-reveal/Fade";
import { orangeThemeDark as theme } from "../../utils/theme";
import { EducationCardEl } from "../../utils/customElements";
import { eduImgWhite } from "../../assets";
// import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
// import "./Education.css";

const EducationCard = ({ id, institution, course, startYear, endYear }) => {
  return (
    <Fade bottom>
      <div className="education-card">
        <EducationCardEl key={id} className="education-card">
          <div
            className="educard-img"
            style={{ backgroundColor: theme.primary }}
          >
            <img src={eduImgWhite} alt="" />
          </div>
          <div className="education-details">
            <h6 style={{ color: theme.primary }}>
              {startYear}-{endYear}
            </h6>
            <h4 style={{ color: theme.tertiary }}>{course}</h4>
            <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
          </div>
        </EducationCardEl>
      </div>
    </Fade>
  );
};

export default EducationCard;
