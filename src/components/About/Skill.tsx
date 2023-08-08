import styles from './About.module.scss';

type SkillProps = {
  img: string;
  name: string;
};

const Skill = ({ img, name }: SkillProps) => {
  return (
    <div className={styles.skillContainer}>
      <img src={img} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default Skill;
