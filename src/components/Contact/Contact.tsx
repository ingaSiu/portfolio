import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

import Button from '../Button/Button';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1>Contact Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.form_container}>
          <div>
            <label for="name">Your name</label>
            <input type="text" name="name"></input>
          </div>

          <div>
            <label for="message">Message</label>
            <textarea name="message" />
          </div>

          <div>
            <label for="email">Your Email</label>
            <input type="email" name="email"></input>
          </div>

          <Button name="Contact Me!" />
        </div>
        <div>
          <div>
            <h3>CONTACT INFO</h3>
            <div>
              <FaEnvelope />
              ingasiu@gmail.com
            </div>
            <p>
              <FaMobileAlt /> +370 604 66592
            </p>
            <p>
              <FaMapMarkerAlt />
              Vilnius, Lithuania
            </p>
          </div>
          <div>
            <h3>Social Networks</h3>
            <div>
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
