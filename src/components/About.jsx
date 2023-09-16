import { Container, Typography, Grid, Paper } from '@mui/material';
import { useLanguage } from '../context/languageContext';

const About = () => {
  const { languageData } = useLanguage(); // Solo necesitas languageData

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Sobre Mí
      </Typography>

      <Typography variant="h4" gutterBottom>
      {languageData.aboutme.exptitle}
      </Typography>
      <Grid container spacing={2}>
        {Object.values(languageData.aboutme.workExperiences).map((experience) => (
          <Grid item xs={12} md={6} key={experience.experienceId}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{experience.title}</Typography>
              <Typography variant="subtitle1">{experience.enterprise}</Typography>
              <Typography variant="subtitle2">{experience.period}</Typography>
              <Typography>{experience.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
      {languageData.aboutme.studiestitle}
      </Typography>
      <Grid container spacing={2}>
        {Object.values(languageData.aboutme.studies).map((study) => (
          <Grid item xs={12} md={6} key={study.studyId}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{study.title}</Typography>
              <Typography variant="subtitle1">{study.enterprise}</Typography>
              <Typography variant="subtitle2">{study.period}</Typography>
              <Typography>{study.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
      {languageData.aboutme.abouttitle}
      </Typography>
      <Typography>{languageData.aboutme.myDescription}</Typography>
    </Container>
  );
}

export default About;
