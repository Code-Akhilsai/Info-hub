import styles from "./cstyles.module.css";

const Menu = () => {
  return (
    <section>
      <div className={styles.Menu_cont}>
        <p>Infohub</p>
        <nav>
          <ul className={styles.Menu_list}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Clubs</a>
            </li>
            <li>
              <a href="#services">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
