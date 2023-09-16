
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext.jsx";
import Navbar from "./components/Navbar";
import Home from "./components/Index";
import About from "./components/About"; // Importa tus componentes necesarios
import Projects from "./components/Projects"; // Importa tus componentes necesarios
import { Container, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import theme from "../theme.js";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Navbar position="fixed" />
          <Container>
           <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              </Routes>
           
          </Container>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
