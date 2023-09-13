import { useLanguage } from "../context/languageContext";

function Navbar() {
  const { language, setLanguage, languageData } = useLanguage();

  const toggleLanguage = () => {
    // Cambia el idioma al alternar entre 'en' y 'es'
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <nav>
      <ul>
        <li>{languageData.navbar.home}</li>
        <li>{languageData.navbar.about}</li>
        <li>{languageData.navbar.projects}</li>
        <li>{languageData.navbar.blog}</li>
      </ul>
      <button onClick={toggleLanguage}>EN / ES</button>
    </nav>
  );
}

export default Navbar;