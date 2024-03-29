import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.opener}>Just say hi!</h2>
      <p className={styles.text}>I'm always open for discussion about new projects and collaborations.</p>
      <div className={styles.contactWrapper}>
        <div className={styles.mail}>
          <p className={styles.smallText}>Mail me at</p>
          <p>ingasiu.dev@gmail.com</p>
        </div>
        <div className={styles.iconsWrapper}>
          <p className={styles.smallText}>Follow me</p>
          <div>
            <a href="https://www.linkedin.com/in/inga-siud/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ingaSiu" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
