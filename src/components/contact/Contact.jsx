import "./contact.css";
import { orangeThemeDark as theme } from "../../utils/theme";
import {
  DetailsIcon,
  inputStyles,
  labelStyles,
  messageStyles,
  SocialIcon,
  SubmitBtn,
} from "../../utils/customElements";

import {
  AlternateEmail,
  Apple,
  Close,
  Google,
  Instagram,
  LinkedIn,
  LocationOnOutlined,
  Phone,
  Reddit,
  SendRounded,
  Telegram,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

import { contactImg } from "../../assets";
import { IconButton, Snackbar, SnackbarContent } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form>
              <div className="input-container">
                <label htmlFor="Name" style={labelStyles}>
                  Name
                </label>
                <input
                  placeholder="John Doe"
                  type="text"
                  name="Name"
                  style={inputStyles}
                  className={`form-input`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" style={labelStyles}>
                  Email
                </label>
                <input
                  placeholder="John@doe.com"
                  type="email"
                  name="Email"
                  className="form-input"
                  style={inputStyles}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" style={labelStyles}>
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  type="text"
                  name="Message"
                  className="form-message"
                  style={messageStyles}
                />
              </div>
              <div className="submit-btn">
                <SubmitBtn
                  type="submit"
                  endIcon={<SendRounded className="send-icon" />}
                >
                  <p>Send</p>
                </SubmitBtn>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "inherit",
                }}
                // message={"hello"}
              />
            </Snackbar>
          </div>
          <div className="contacts-details">
            <a
              href="mailto:blastentertainment@gmail.com"
              className="personal-details"
            >
              <DetailsIcon>
                <AlternateEmail />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>
                blastentertainment@gmail.com
              </p>
            </a>
            <a href={`tel:+915588776600`} className="personal-details">
              <DetailsIcon>
                <Phone />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>+915588776600</p>
            </a>
            <div className="personal-details">
              <DetailsIcon>
                <LocationOnOutlined />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>
                'Menlo Park, California, United States - 673822
              </p>
            </div>

            <div className="socialmedia-icons">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <SocialIcon>
                  <Twitter aria-label="Twitter" />
                </SocialIcon>
              </a>

              <a
                href="https://www.linkedin.com/in"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <LinkedIn aria-label="LinkedIn" />
                </SocialIcon>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <Instagram aria-label="Instagram" />
                </SocialIcon>
              </a>
              <a
                href="https://t.me/lastdeejay"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <Telegram aria-label="Telegram" />
                </SocialIcon>
              </a>
              <a
                href="https://www.whatsapp.web/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <WhatsApp aria-label="Whatsapp" />
                </SocialIcon>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                <SocialIcon>
                  <YouTube aria-label="YouTube" />
                </SocialIcon>
              </a>
              <a
                href="https://www.reddit.com/user/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <Reddit aria-label="Reddit" />
                </SocialIcon>
              </a>
              <a
                href="https://google.com/users/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <Google aria-label="Google" />
                </SocialIcon>
              </a>
              <a href="https://apple.com/me/" target="_blank" rel="noreferrer">
                <SocialIcon>
                  <Apple aria-label="Apple Id" />
                </SocialIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={contactImg} alt="contacts" className="contacts--img" />
    </div>
  );
};

export default Contact;
