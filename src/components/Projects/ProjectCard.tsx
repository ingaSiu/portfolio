import Button from '../Button/Button';
import styles from './ProjectCard.module.scss';

type CardProps = {
  name: string;
  img: string;
};

const ProjectCard = ({ name, img }: CardProps) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <div className={styles.btn_container}>
        <Button name="ABOUT" />
        <Button name="DEMO" />
      </div>
    </div>
  );
};

export default ProjectCard;
