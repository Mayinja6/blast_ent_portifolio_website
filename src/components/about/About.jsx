import "./about.css";
import { orangeThemeDark as theme } from "../../utils/theme";
import { orangeThemeBoy } from "../../assets";

const About = () => {
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>Who We Are</h2>
          <p style={{ color: theme.tertiary80 }}>
            We are the <strong>Blast ENT</strong> . We are photographers and
            editors based in Kampala, UG.
            <br />
            <br />
            During the day we work as photographers at a local agency and in the
            evening we work on Disco Jocery(DJ's). We spend our leisure hours
            video and Photo Editing. We love to learn and explore new arenas.
          </p>
        </div>
        <div className="about-img">
          <img src={orangeThemeBoy} alt="ThemeImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
