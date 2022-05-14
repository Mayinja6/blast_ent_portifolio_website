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
            My name's Jane. I'm a web designer and developer based in
            Southampton, UK.
            <br />
            <br />
            During the day I work as a lead developer at a local agency and in
            the evening I work on freelance projects and utilize the time to
            built my own products. I spent my leisure hours writing articles and
            poetry. Right now I'm also trying a hand at machine learning and AI.
            I love to learn and explore new arenas.
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
