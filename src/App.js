import Home from "./Pages/Home/Home";
import GlobalStyle from "./Components/Styles/Global.styles";
import { ThemeProvider } from "styled-components";

const theme = {
  light: "light"
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
