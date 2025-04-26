import styles from "./cstyles.module.css";

const Menu = () => {
  return (
    <section>
      <div className={styles.Menu_cont}>
        <p>Infohub</p>
        <nav>
          <ul className={styles.Menu_list}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/clubs">Clubs</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>
        </nav>

        <div className={styles.Buttons}>
          <button className={styles.TransparentButton}>Signup</button>
          <button className={styles.TransparentButton}>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
