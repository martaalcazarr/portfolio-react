import { createContext, useContext, useState } from 'react';
import enData from "../lang/en.json";
import esData from "../lang/es.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Estado del idioma actual
  const languageData = language === 'en' ? enData : esData;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

