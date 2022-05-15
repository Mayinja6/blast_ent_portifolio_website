import Fade from "react-reveal/Fade";
import { orangeThemeDark as theme } from "../../../utils/theme";
import "./SingleService.css";

function SingleService({ id, title, icon }) {
  return (
    <Fade bottom>
      <div
        key={id}
        className="single-service"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="service-content" style={{ color: theme.tertiary }}>
          <i className="service-icon">{icon}</i>
          <h4 style={{ color: theme.tertiary }}>{title}</h4>
        </div>
      </div>
    </Fade>
  );
}

export default SingleService;
