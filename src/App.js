import Home from "./Pages/Home/Home";
import GlobalStyle from "./Components/Styles/Global.styles";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

const lightTheme = {
  light: "light"
}
const darkTheme = {
  dark: "dark"
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const isDarkTheme = theme === "dark";
  const handleTheme = () => {
    if(isDarkTheme){
      setTheme("light");
    }else{
      setTheme("dark");
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Home handleTheme={handleTheme} isDarkTheme={isDarkTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
