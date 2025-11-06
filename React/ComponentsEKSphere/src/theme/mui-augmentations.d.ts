import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    sx: true;
    xs: true;
  }
  interface ButtonPropsColorOverrides {
    brand: true;
  }
}
