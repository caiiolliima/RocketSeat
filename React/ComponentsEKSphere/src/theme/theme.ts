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
      main: "oklch(72% 0.145 150)",
      dark: "oklch(66% 0.145 150)",
      light: "oklch(78% 0.120 150)",
      contrastText: "#fff",
    },
  },
  shape: { borderRadius: 12 },
});

export { theme };
