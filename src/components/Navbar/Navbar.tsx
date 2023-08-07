import MobileMenu from './MobileMenu/MobileMenu';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.inner_container}>
        <div className={styles.left_container}>
          <a href="#">
            {' '}
            <img src="cat_icon.png" />
          </a>

          <p>
            {'<'}Inga Siudikienė{'/>'}
          </p>
        </div>

        <div className={styles.right_container}>
          <div className={styles.links_container}>
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
