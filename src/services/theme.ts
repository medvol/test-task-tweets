import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EBD8FF",
    },
    secondary: {
      main: "#5CD3A8",
    },

    background: {
      default:
        "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
    },

    text: {
      primary: "#373737",
      secondary: "rgba(17, 17, 17, 0.6)",
    },
  },

  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: 20,

    body1: {
      fontFamily: "Montserrat,sans-serif",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.22,
    },
    body2: {
      fontFamily: "Montserrat,sans-serif",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.22,
    },
  },
});
