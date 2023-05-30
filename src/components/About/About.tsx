import Skill from './Skill';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about_container}>
      <div className={styles.about}>
        <h1>ABOUT ME</h1>
        <p>
          <span>Never stop learning!</span> I chose front-end programming because I wanted not only to change my career
          but also to boost my experiences and create myself a place in very vast and interesting field which is always
          growing.
        </p>
        <h4>Main principles:</h4>
        <p>
          <span>Consistency is the key!</span> As someone who loves to learn and grow, I am always seeking out new
          challenges and opportunities to enhance my skills and expand my knowledge. I strive for consistency, so
          everyday I dedicate my time to improve my skills by programming, solving katas and watching or reading about
          concepts and tools for front-end programming.
        </p>
        <p>
          <span>Positive attitude saves the day!</span> In programming everyday is challenging and sometimes it can be
          frustrating. But I think that having a positive attitude in programming is essential for success. A positive
          mindset fosters creativity, encourages collaboration, and promotes a growth-oriented mindset. So even in
          difficult times I can reset myself, reflect about my frustrations and take the challenge again.
        </p>
        <p>
          <span>Reflection and Analysis are your friends!</span> I believe that front-end programming is very dynamic so
          having a solid understanding of its priciples is a must.That's why I analyze various web pages, apps,
          components and try to recreate them. Not only it helps to expand my knowledge about user-centric
          approach,responsive design, accessibility, but also it lets me to reflect on my knowledge, skills and
          encourages me to study and practice even more.
        </p>
        <p>
          <span>Googling is better than procrastination</span> Than a problem arises I always try to find more
          information and put aquired knowledge to use by creating a solution. So StackOverflow, Youtube, ChatGTP are my
          companions in the programming journey.
        </p>
      </div>

      <div className={styles.skills}>
        <h1>MY SKILLS</h1>
        <div className={styles.main_skills}>
          <div className={styles.col}>
            <Skill img="JavaScript.svg" name="JavaScript" />
            <Skill img="HTML.svg" name="HTML5" />
            <Skill img="CSS.svg" name="CSS3" />
            <Skill img="StyledComponents.svg" name="Styled-components" />
            <Skill img="Github-Dark.svg" name="GitHub" />
          </div>
          <div className={styles.col}>
            <Skill img="TypeScript.svg" name="TypeScript" />
            <Skill img="React-Dark.svg" name="React" />
            <Skill img="Sass.svg" name="Sass" />
            <Skill img="VSCode-Dark.svg" name="VS Code" />
            <Skill img="Git.svg" name="Git" />
          </div>
        </div>
        <div className={styles.additional_skills}>
          <h4>Familiar with:</h4>
          <div className={styles.other_skills_wrapper}>
            <Skill img="MaterialUI-Dark.svg" name="MUI" />
            <Skill img="TailwindCSS-Dark.svg" name="TailwindCSS" />
            <Skill img="NodeJS-Dark.svg" name="NodeJS" />
            <Skill img="MongoDB.svg" name="Mongo DB" />
            <Skill img="Postman.svg" name="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
