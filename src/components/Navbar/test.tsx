<div className={styles.navbar_container} extendNavbar={extendNavbar}>
      <div className={styles.inner_container}>
        <div className={styles.left_container}>
          <img src="./cat_icon.png" />
          <p>&#x3c; Inga Siudikiene &#x2215;&#x3e;</p>
        </div>

        <div className={styles.right_container}>
          <div className={styles.links_container}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
            <button
              className={styles.nav_btn}
              onClick={() => {
                setExtendNavbar((current) => !current);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </button>
          </div>
        </div>
        {extendNavbar && (
          <div className={styles.nav_extend}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        )}
      </div>
    </div>