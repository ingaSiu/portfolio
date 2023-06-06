import * as Yup from 'yup';

import { SyntheticEvent, useRef } from 'react';

import Button from '../Button/Button';
import emailjs from '@emailjs/browser';

type FormProps = {
  name: string;
  email: string;
  message: string;
};

const validationSchema: Yup.ObjectSchema<FormProps> = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  message: Yup.string().required('Required'),
});

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const currentForm = form.current;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <Button name="Contact Me!" />
    </form>
  );
};

export default ContactForm;
