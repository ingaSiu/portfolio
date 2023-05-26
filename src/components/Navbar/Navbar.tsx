import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.inner_container}>
        <div className={styles.left_container}>
          <img src="" />
          <p>Inga Siudikiene</p>
        </div>

        <div className={styles.right_container}>
          <div className={styles.links_container}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
