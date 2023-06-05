import ProjectCard from './ProjectCard';
import { projectInfo } from '../../assets/Info/projectInfo';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.cards_wrapper}>
        {projectInfo.map((item) => (
          <ProjectCard
            key={item.id}
            name={item.name}
            img={item.img}
            urlDemo={item.urlDemo}
            urlGit={item.urlGit}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
