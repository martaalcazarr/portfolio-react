
import { Grid, Typography, Button, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from "../context/languageContext";

function Home() {
  const { language, setLanguage, languageData } = useLanguage();
  return (
    <Grid container spacing={3}>
      {/* Columna de texto */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h2" gutterBottom>
            {languageData.home.title}
          </Typography>
          <Typography variant="h5" paragraph>
            {languageData.home.subtitle}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.buttons.downloadCv}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/tu-linkedin" 
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.buttons.visitLn}
          </Button>
        </Paper>
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <img
          src="/" 
          alt="Marta Alcázar"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}

export default Home;