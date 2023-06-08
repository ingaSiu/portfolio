import React from 'react';

const test = () => {
  return (
    <div>
      {' '}
      <div className={styles.container}>
        <h3>CONTACT INFO</h3>

        <div className={styles.contact_info_wrapper}>
          <FaEnvelope />
          <span>ingasiu@gmail.com</span>
        </div>

        <div className={styles.contact_info_wrapper}>
          <FaMobileAlt />
          <span>+370 604 66592</span>
        </div>

        <div className={styles.contact_info_wrapper}>
          <FaMapMarkerAlt />
          <span>Vilnius, Lithuania</span>
        </div>
      </div>
      <div>
        <h3>Social Networks</h3>

        <div className={styles.social_wrapper}>
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default test;
