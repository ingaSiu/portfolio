import Button from '../Button/Button';
import styles from './ProjectCard.module.scss';

type CardProps = {
  name: string;
  img: string;
  url: string;
  id?: number;
};

const ProjectCard = ({ name, img, url }: CardProps) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <div className={styles.btn_container}>
        <Button name="ABOUT">
          <a href=""></a>
        </Button>
        <Button name="DEMO">
          <a href={url} target="_blank"></a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
