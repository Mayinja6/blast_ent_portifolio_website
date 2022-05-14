import { createTheme } from "@mui/material";

export const pageParts = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const orangeThemeDark = {
  type: "dark",
  primary: "#f56539",
  primary400: "#ff764d",
  primary600: "#fa5624",
  primary80: "#f56539cc",
  primary50: "#f5653980",
  primary30: "#f565394d",
  secondary: "#212121",
  secondary70: "#212121b3",
  secondary50: "#21212180",
  tertiary: "#eaeaea",
  tertiary80: "#eaeaeacc",
  tertiary70: "#eaeaeab3",
  tertiary50: "#eaeaea80",
  // aboutimg1: orangeThemeboy,
  // aboutimg2: orangeThemegirl,
  // eduimg: eduOrange,
  // expimg: expOrange,
  // contactsimg: contactsOrange
};

export const orangeThemeLight = {
  type: "light",
  primary: "#f56539",
  primary400: "#ff764d",
  primary600: "#fa5624",
  primary80: "#f56539cc",
  primary50: "#f5653980",
  primary30: "#f565394d",
  secondary: "#eaeaea",
  secondary70: "#eaeaeab3",
  secondary50: "#eaeaea80",
  tertiary: "#212121",
  tertiary80: "#212121cc",
  tertiary70: "#212121b3",
  tertiary50: "#21212180",
};
