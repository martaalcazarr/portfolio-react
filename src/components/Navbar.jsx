
import { useLanguage } from "../context/languageContext";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'


function Navbar() {
  const { language, setLanguage, languageData } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {languageData.navbar.home}
      </Typography>
      <Button color="inherit">{languageData.navbar.about}</Button>
      <Button color="inherit">{languageData.navbar.projects}</Button>
      <Button color="inherit">{languageData.navbar.blog}</Button>
      <Button color="inherit" onClick={toggleLanguage}>
        {language === 'en' ? 'EN' : 'ES'}
      </Button>
    </Toolbar>
  </AppBar>
);
}

export default Navbar;