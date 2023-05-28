import Skill from './Skill';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about_container}>
      <div className={styles.about}>
        <h1>ABOUT ME</h1>
        <p>Trumpas aprasymas apie mane</p>
        <p>savybes aprasymas</p>
        <p>savybes aprasymas</p>
        <p>savybes aprasymas</p>
        <p>savybes aprasymas</p>
      </div>

      <div className={styles.skills}>
        <h1>MY SKILLS</h1>
        <div className={styles.main_skills}>
          <div className={styles.col}>
            <Skill img="JavaScript.svg" name="JavaScript" />
          </div>
          <div className={styles.col}>
            <Skill img="TypeScript.svg" name="TypeScript" />
          </div>
        </div>
        <div className={styles.additional_skills}>
          <h4>Familiar with:</h4>
          <p>add some icons?</p>
        </div>
      </div>
    </section>
  );
};

export default About;
