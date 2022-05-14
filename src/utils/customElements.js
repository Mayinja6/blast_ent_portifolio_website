import styled from "@emotion/styled";
import { Button, Icon } from "@mui/material";
import { orangeThemeDark as theme } from "./theme";
import { pageParts } from "./theme";
import {
  photoshop,
  adobeXd,
  adobeaudition,
  afterEffects,
  illustrator,
  lightroom,
  premierpro,
  microsoftoffice,
  sketch,
} from "../assets";

export const ResumeBtn = styled(Button)({
  color: theme.primary,
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  fontSize: "1rem",
  fontWeight: "500",
  height: "50px",
  fontFamily: "var(--font-family)",
  border: `3px solid ${theme.primary}`,
  transition: "100ms ease-out",
  "&:hover": {
    backgroundColor: theme.tertiary,
    color: theme.secondary,
    border: `3px solid ${theme.tertiary}`,
  },
  [pageParts.breakpoints.down("sm")]: {
    width: "180px",
  },
});

export const ContactBtn = styled(Button)({
  backgroundColor: theme.primary,
  color: theme.secondary,
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  height: "50px",
  fontSize: "1rem",
  fontWeight: "500",
  fontFamily: "var(--primaryFont)",
  border: `3px solid ${theme.primary}`,
  transition: "100ms ease-out",
  "&:hover": {
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    border: `3px solid ${theme.tertiary}`,
  },
  [pageParts.breakpoints.down("sm")]: {
    display: "none",
  },
});

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "lightroom":
      return lightroom;
    case "photoshop":
      return photoshop;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "adobe audition":
      return adobeaudition;
    case "microsoft office":
      return microsoftoffice;
    case "sketch":
      return sketch;
    case "premiere pro":
      return premierpro;
    default:
      break;
  }
};

export const SubmitBtn = styled(Button)({
  backgroundColor: theme.primary,
  color: theme.secondary,
  transition: "250ms ease-in-out",
  "&:hover": {
    transform: "scale(1.08)",
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
});

export const SocialIcon = styled(Icon)({
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "21px",
  backgroundColor: theme.primary,
  color: theme.secondary,
  transition: "250ms ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
});

export const DetailsIcon = styled(Icon)({
  backgroundColor: theme.primary,
  color: theme.secondary,
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "23px",
  transition: "250ms ease-in-out",
  flexShrink: 0,
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
});

export const inputStyles = {
  border: `4px solid ${theme.primary80}`,
  backgroundColor: `${theme.secondary}`,
  color: `${theme.tertiary}`,
  fontFamily: "inherit",
  fontWeight: 500,
  transition: "border 0.2s ease-in-out",
  "&:focus": {
    border: `4px solid ${theme.primary600}`,
  },
};

export const messageStyles = {
  border: `4px solid ${theme.primary80}`,
  backgroundColor: `${theme.secondary}`,
  color: `${theme.tertiary}`,
  fontFamily: "var(--primaryFont)",
  fontWeight: 500,
  transition: "border 0.2s ease-in-out",
  "&:focus": {
    border: `4px solid ${theme.primary600}`,
  },
};

export const labelStyles = {
  backgroundColor: `${theme.secondary}`,
  color: `${theme.primary}`,
  fontFamily: "var(--primaryFont)",
  fontWeight: 600,
  fontSize: "0.9rem",
  padding: "0 5px",
  transform: "translate(25px,50%)",
  display: "inline-flex",
};
