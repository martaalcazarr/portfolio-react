
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext.jsx";
import Navbar from "./components/Navbar";
import Home from "./components/Index";
import About from "./components/About";
import Projects from "./components/Projects";
import { Container, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import theme from "../theme.js";

function App() {
  return (
    <Router> 
      <LanguageProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Navbar position="fixed" />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </LanguageProvider>
    </Router> 
  );
}

export default App;
