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
          <h2 style={{ color: theme.primary }}>Who I am</h2>
          <p style={{ color: theme.tertiary80 }}>
            My name's <strong>Simon Doe</strong> . I'm a photographer and editor
            based Kampala, UG.
            <br />
            <br />
            During the day I work as a Photographer at a local agency and in the
            evening I work on freelance projects and utilize the time to built
            my own projects. I spent my leisure hours writing Documents and
            Video Editing. Right now I'm also trying a hand at Disco Jocery. I
            love to learn and explore new arenas.
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
