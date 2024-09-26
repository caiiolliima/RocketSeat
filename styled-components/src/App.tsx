import { Button } from "./Components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/Themes/default";
import { GlobalStyle } from "./@types/global";
import { Input } from "./Components/inputs/input";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant= "secondary"/>
      <Button variant= "danger"/>
      <Button variant= "success"/>
      <Button  />
      <Input />
      <GlobalStyle />
    </ThemeProvider>
  )
}
