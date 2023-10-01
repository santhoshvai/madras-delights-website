import { Arima } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const arima = Arima({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e9e4dd",
    },
  },
  typography: {
    fontFamily: arima.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
