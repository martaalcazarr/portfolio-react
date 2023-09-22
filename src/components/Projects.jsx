import Chip from "@mui/material/Chip";
import { Container, Typography, Grid, Paper, Button, Link } from "@mui/material";
import { useLanguage } from "../context/languageContext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap, 
  SiReact,
  SiExpress, 
  SiMongodb,
  SiNodedotjs,
  SiPug,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiNextdotjs,
  SiPrisma,
  SiVite,
  SiMui,
  SiRemix,
  SiStrapi,
  SiSass,
  SiGulp,
  SiVuedotjs
} from "react-icons/si";

const Projects = () => {
  const { languageData } = useLanguage();

  
  const techIcons = {
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    JavaScript: <SiJavascript />,
    Tailwind: <SiTailwindcss />,
    Bootstrap: <SiBootstrap />,
    React: <SiReact />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    Node: <SiNodedotjs />,
    Pug: <SiPug />,
    Ruby: <SiRuby />,
    RoR: <SiRubyonrails />,
    PostgreSQL: <SiPostgresql />,
    Next: <SiNextdotjs />,
    Prisma: <SiPrisma />,
    Vite: <SiVite />,
    Mui: <SiMui />,
    Remix: <SiRemix />,
    Strapi: <SiStrapi />,
    SASS: <SiSass />,
    Gulp: <SiGulp />,
    Vue: <SiVuedotjs />
  };

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
              {/* Mapea las tecnologías a Chips con los iconos correspondientes */}
              <div>
                {project.technologies.split(", ").map((tech) => (
                  <Chip
                    key={tech}
                    variant="outlined"
                    size="small"
                    icon={techIcons[tech]}
                    label={tech}
                    style={{ marginRight: 8, marginBottom: 8 }}
                  />
                ))}
              </div>
              <Typography>{project.description}</Typography>
              <Button
                component={Link}
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {languageData.myProjects.viewRepo}
              </Button>
              <Button
                component={Link}
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              {/* Mapea las tecnologías a Chips con los iconos correspondientes */}
              <div>
                {groupProject.technologies.split(", ").map((tech) => (
                  <Chip
                    key={tech}
                    variant="outlined"
                    size="small"
                    icon={techIcons[tech]}
                    label={tech}
                    style={{ marginRight: 8, marginBottom: 8 }}
                  />
                ))}
              </div>
              <Typography><span style={{ fontWeight: 'bold' }}>{languageData.myProjects.myRole}</span>  {groupProject.myRole}</Typography>
              <Typography>{groupProject.description}</Typography>
              <Button
                component={Link}
                href={groupProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {languageData.myProjects.viewRepo}
              </Button>
              <Button
                component={Link}
                href={groupProject.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {languageData.myProjects.viewDeploy}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
