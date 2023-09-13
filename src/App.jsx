import { LanguageProvider } from "./context/languageContext.jsx"
import Navbar from "./components/Navbar"

function App() {


  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  )
}

export default App
