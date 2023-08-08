import { FaGithub, FaLinkedin } from 'react-icons/fa';

import style from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={style.heroWrapper}>
      <div className={style.introWrapper}>
        <div className={style.col1}>
          <p className={style.name}>
            I'm <b>Inga Siudikienė</b>
          </p>
          <p className={style.intro}>Junior front-end developer</p>
        </div>
        <div className={style.col2}>
          <img src="https://i.imgur.com/AyiIcLT.jpg" alt="Profile picture" />
        </div>
      </div>

      <div className={style.contactWrapper}>
        <div className={style.contactIcons}>
          <a href="https://www.linkedin.com/in/inga-siud/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ingaSiu" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className={style.contact_email}>
          <span>ingasiu.dev@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
