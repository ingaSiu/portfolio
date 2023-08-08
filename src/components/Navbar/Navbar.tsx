import MobileMenu from './MobileMenu/MobileMenu';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <a href="#">
            {' '}
            <img src="cat_icon.png" />
          </a>

          <p>
            {'<'}Inga Siudikienė{'/>'}
          </p>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.linksContainer}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
