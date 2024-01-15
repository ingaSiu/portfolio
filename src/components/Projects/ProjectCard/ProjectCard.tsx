import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

type CardProps = {
  name: string;
  img: string;
  urlDemo: string;
  urlGit: string;
  id?: number;
  description: string;
};

const ProjectCard = ({ name, img, urlDemo, urlGit, description }: CardProps) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{description}</p>
      <div className={styles.btnContainer}>
        {urlDemo === '' ? (
          ''
        ) : (
          <Link to={urlDemo} target="_blank">
            <Button name="DEMO" />
          </Link>
        )}

        <Link to={urlGit} target="_blank">
          <Button name="GITHUB" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
