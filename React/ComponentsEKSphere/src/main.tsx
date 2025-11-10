import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import "./index.css";
import App from "./App.tsx";
import { theme } from "./theme/theme.ts";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
