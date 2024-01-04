import { FaGithub } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <p> 2024 by Inga</p>
      <a className={styles.link} href="https://github.com/ingaSiu" target="blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Footer;
