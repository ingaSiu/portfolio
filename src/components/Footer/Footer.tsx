import { FaGithub } from 'react-icons/fa';
import { currentYear } from '../../sass/utils/currentYear';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        {' '}
        <span>{currentYear}</span> by Inga
      </p>
      <a className={styles.link} href="https://github.com/ingaSiu" target="blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Footer;
