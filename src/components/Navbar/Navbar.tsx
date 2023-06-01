import { ABOUT_PATH, CONTACT_PATH, PROJECTS_PATH } from '../../routes/consts';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useState } from 'react';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleNav = () => {
    setExtendNavbar(!extendNavbar);
  };

  return (
    <nav className={styles.navbar}>
      {/* normal navbar section */}
      <div className={styles.navbar_wrapper}>
        <div className={styles.left_container}>
          <img src="./cat_icon.png" />
          <p>&#x3c; Inga Siudikiene &#x2215;&#x3e;</p>
        </div>
        <div className={styles.right_container}>
          <div className={styles.links_container}>
            <Link to={ABOUT_PATH} onClick={handleNav}>
              About
            </Link>
            <Link to={PROJECTS_PATH} onClick={handleNav}>
              Projects
            </Link>
            <Link to={CONTACT_PATH} onClick={handleNav}>
              Contact Me
            </Link>
            <div
              className={styles.navbar_hamburger}
              onClick={() => {
                setExtendNavbar((current) => !current);
              }}
            >
              {extendNavbar ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu section */}
      <div className={`${styles.nav_extend_menu} ${extendNavbar ? styles.nav_extend_open : ''}`}>
        <div onClick={handleNav} className={styles.nav_extend_close}>
          <FaTimes />
        </div>

        <div className={styles.nav_extend_links}>
          <Link to={ABOUT_PATH} onClick={handleNav}>
            About
          </Link>
          <Link to={PROJECTS_PATH} onClick={handleNav}>
            Projects
          </Link>
          <Link to={CONTACT_PATH} onClick={handleNav}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
