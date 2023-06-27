import { createTheme } from "@suid/material";
// import "../style/App.module.css";

const mainTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1C1B1F",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper:   "#FFFFFF"
    },
  },
  typography: {
    fontFamily: "'Edu SA Beginner', 'Courier New', Roboto, Helvetica, Arial, sans-serif",
    h1: { 
      fontSize: "54px",
      fontWeight: 600,
      lineHeight: "63px",
      letterSpacing: "2px",
      textAlign: "left"
    },
    h2: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h3: {
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "20px",
      // letter-spacing: 0.10000000149011612px;
      textAlign: "left",
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      // Special! For contact form labels
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: "40px",
      // letter-spacing: 0.10000000149011612px;
      textAlign: "right",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle2: {
    },
    body1: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body2: {
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
    }
  },
  shape: {
    borderRadius: 20
  }
});


export {
  // themeColors,
  mainTheme,
  // navbarTheme
};