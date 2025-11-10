import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brand?: Palette["primary"];
  }
  interface PaletteOptions {
    brand?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    success: {
      main: "#CECE00",
      dark: "#AFAF00",
      light: "#E0E000",
      contrastText: "#fff",
    },
  },
  shape: { borderRadius: 12 },
});

export { theme };
