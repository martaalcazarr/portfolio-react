import { LanguageProvider } from "./context/languageContext.jsx"
import Navbar from "./components/Navbar"
import { Container, ThemeProvider } from "@mui/material"

import theme from "../theme.js"

function App() {


  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
      <Navbar position="fixed"/>
     <Container>
    
     </Container>
     </ThemeProvider>
     
    </LanguageProvider>
  )
}

export default App
