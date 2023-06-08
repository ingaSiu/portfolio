import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.opener}>Just say hi!</h2>
      <p className={styles.text}>I'm always open to discuss your project and talk about new things.</p>
      <div className={styles.contact_wrapper}>
        <div className={styles.mail}>
          <p className={styles.small_text}>Mail me at</p>
          <p>ingasiu.dev@gmail.com</p>
        </div>
        <div className={styles.icons_wrapper}>
          <p className={styles.small_text}>Follow me</p>
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
