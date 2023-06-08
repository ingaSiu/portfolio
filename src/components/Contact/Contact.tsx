import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contact_wrapper}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
