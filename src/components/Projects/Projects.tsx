import ProjectCard from './ProjectCard';
import { projectInfo } from '../../assets/project_info/project_info';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className={styles.cards_wrapper}>
        {projectInfo.map((item) => (
          <ProjectCard key={item.name} name={item.name} img={item.img} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
