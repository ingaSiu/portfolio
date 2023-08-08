import { SyntheticEvent, useRef, useState } from 'react';

import Button from '../../Button/Button';
import emailjs from '@emailjs/browser';
import style from './ContactForm.module.scss';

const SERVICE = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);
  const nameInput = useRef<HTMLInputElement | null>(null);

  const isValidEmail = (email: string) => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsClicked(true);
    const currentForm = form.current;

    if (currentForm?.checkValidity()) {
      emailjs.sendForm(SERVICE, TEMPLATE, currentForm, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
      setMessageSent(true);
      setIsClicked(false);
      form?.current?.reset();
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setMessageSent(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className={style.contactForm}>
      <div className={style.inputWrapper}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          ref={nameInput}
          required
          minLength={2}
          maxLength={50}
          onChange={(e) => setName(e.target.value)}
        />
        {isClicked && name.length < 2 && <div className="error">Enter a name that is at least 2 characters long</div>}

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          maxLength={50}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isClicked && !isValidEmail(email) && (
          <div className="error">Enter a valid email address. Example: john@mail.com</div>
        )}

        <textarea
          name="message"
          required
          placeholder="Message"
          minLength={12}
          maxLength={500}
          onChange={(e) => setMessage(e.target.value)}
        />
        {isClicked && message.length < 12 && (
          <div className="error">Your message must be at least 12 characters long</div>
        )}
        {messageSent && <div className="success-message">Thank you! Your message has been sent</div>}
      </div>
      <div className={style.btnWrapper}>
        <Button name="Contact Me!" />
      </div>
    </form>
  );
};

export default ContactForm;
