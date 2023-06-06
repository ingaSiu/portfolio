import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      {' '}
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
  );
};

export default ContactInfo;
