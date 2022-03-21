import { createTheme } from "@mui/material";

export const primary = "#000";
export const secondary = "#61dafb";
export const white = "#fff";
export const black = "#000";

const appTheme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: secondary,
      contrastText: white,
    },
  },
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

export default appTheme;
