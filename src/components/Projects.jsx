
import { Container, Typography, Grid, Paper, Button, Link } from '@mui/material';
import { useLanguage } from '../context/languageContext';

const Projects = () => {
  const { languageData } = useLanguage();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {languageData.myProjects.projectsTitle}
      </Typography>
      <Grid container spacing={2}>
        {languageData.myProjects.projects.map((project) => (
          <Grid item xs={12} md={6} key={project.projectId}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="subtitle1">{project.technologies}</Typography>
              <Typography>{project.description}</Typography>
              <Button component={Link} href={project.repoLink} target="_blank" rel="noopener noreferrer">
                {languageData.myProjects.viewRepo}
              </Button>
              <Button component={Link} href={project.deployLink} target="_blank" rel="noopener noreferrer">
                {languageData.myProjects.viewDeploy}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        {languageData.myProjects.groupProjectsTitle}
      </Typography>
      <Grid container spacing={2}>
        {languageData.myProjects.groupProjects.map((groupProject) => (
          <Grid item xs={12} md={6} key={groupProject.projectId}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{groupProject.title}</Typography>
              <Typography variant="subtitle1">{groupProject.technologies}</Typography>
              <Typography>{groupProject.description}</Typography>
              <Button component={Link} href={groupProject.repoLink} target="_blank" rel="noopener noreferrer">
                {languageData.myProjects.viewRepo}
              </Button>
              <Button component={Link} href={groupProject.deployLink} target="_blank" rel="noopener noreferrer">
                {languageData.myProjects.viewDeploy}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
