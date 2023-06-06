import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1>Contact Me</h1>

      <ContactForm />
      <ContactInfo />
    </section>
  );
};

export default Contact;
