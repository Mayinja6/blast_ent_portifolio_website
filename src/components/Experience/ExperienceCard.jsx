import "./Experience.css";
import Fade from "react-reveal/Fade";
import { expImgWhite } from "../../assets";
import { orangeThemeDark as theme } from "../../utils/theme";
import { ExperienceCardEl } from "../../utils/customElements";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  return (
    <Fade bottom>
      <div className="experience-card">
        <ExperienceCardEl sx={{ width: "100%", padding: 1 }}>
          <div
            className="expcard-img"
            style={{ backgroundColor: theme.primary }}
          >
            <img src={expImgWhite} alt="" />
          </div>
          <div className="experience-details">
            <h6 style={{ color: theme.primary }}>
              {startYear}-{endYear}
            </h6>
            <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
            <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
          </div>
        </ExperienceCardEl>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
