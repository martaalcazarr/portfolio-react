import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import {
  Hidden,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Fade} from "@mui/material";

function Navbar() {
  const { language, setLanguage, languageData } = useLanguage();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden smUp>
          <IconButton
          id="fade-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleMenuClose}>
              {languageData.navbar.about}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              {languageData.navbar.projects}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              {languageData.navbar.blog}
            </MenuItem>
          </Menu>
        </Hidden>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {languageData.navbar.home}
        </Typography>
        <Hidden smDown>
          <Button color="inherit">{languageData.navbar.about}</Button>
          <Button color="inherit">{languageData.navbar.projects}</Button>
          <Button color="inherit">{languageData.navbar.blog}</Button>
        </Hidden>
        <Button color="inherit" onClick={toggleLanguage}>
          {language === "en" ? "EN" : "ES"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
