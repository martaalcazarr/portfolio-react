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
import { Link } from "react-router-dom";


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
          <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
  <MenuItem onClick={handleMenuClose}>
    {languageData.navbar.about}
  </MenuItem>
</Link>
<Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
  <MenuItem onClick={handleMenuClose}>
    {languageData.navbar.projects}
  </MenuItem>
</Link>
<Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
  <MenuItem onClick={handleMenuClose}>
    {languageData.navbar.blog}
  </MenuItem>
</Link>

          </Menu>
        </Hidden>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to ="/" style={{ textDecoration: "none", color: "inherit" }}>
          {languageData.navbar.home}
          </Link>
        </Typography>
        <Hidden smDown>
  <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
    <Button color="inherit">{languageData.navbar.about}</Button>
  </Link>
  <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
    <Button color="inherit">{languageData.navbar.projects}</Button>
  </Link>
  <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
    <Button color="inherit">{languageData.navbar.blog}</Button>
  </Link>
</Hidden>

        <Button color="inherit" onClick={toggleLanguage}>
          {language === "en" ? "EN" : "ES"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
