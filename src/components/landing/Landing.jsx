import "./landing.css";
import { orangeThemeDark as theme } from "../../utils/theme";
import TypeWriterEffect from "react-typewriter-effect";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Telegram,
  YouTube,
} from "@mui/icons-material";

import LandingImg from "../../assets/placeholder.png";
import { ResumeBtn, ContactBtn } from "../../utils/customElements";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="landing--social"
            >
              <LinkedIn
                style={{ color: theme.secondary }}
                aria-label="Linked In"
              />
            </a>
            <a
              href="https://t.me/blastdeejay"
              target="_blank"
              rel="noreferrer"
              className="landing--social"
            >
              <Telegram
                style={{ color: theme.secondary }}
                aria-label="telegram"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="landing--social"
            >
              <Twitter
                style={{ color: theme.secondary }}
                aria-label="Twitter"
              />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="landing--social"
            >
              <Facebook
                style={{ color: theme.secondary }}
                aria-label="YouTube"
              />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="landing--social"
            >
              <YouTube
                style={{ color: theme.secondary }}
                aria-label="YouTube"
              />
            </a>
          </div>
        </div>
        <img
          src={LandingImg}
          alt="LandingImg"
          className="landing--img"
          style={{
            // opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>
              <TypeWriterEffect
                textStyle={{
                  fontSize: "inherit",
                  fontWeight: 500,
                }}
                multiTextLoop
                startDelay={100}
                cursorColor="rgb(22, 37, 53)"
                multiText={[
                  "Video editor,",
                  "Photographer,",
                  "Disco Jocer,",
                  "Photo Editor,",
                  "Microsoft Office,",
                ]}
                multiTextDelay={2500}
                typeSpeed={100}
              />
            </h6>
            <h1>Blast Ent</h1>
            <p>
              Photo and video editing, Banner Designs, Business cards, Flyers,
              All Microsoft Office services, Video and Disco Jocery, Latest and
              ordinary Music audio and videos and other servies.
            </p>
            <div className="lcr-buttonContainer">
              <a href={LandingImg} target="_blank" rel="noreferrer">
                <ResumeBtn>Download CV</ResumeBtn>
              </a>
              <a href="/#contacts" spy="true" duration={2000}>
                <ContactBtn>Contact</ContactBtn>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
