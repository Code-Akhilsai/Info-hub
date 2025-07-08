import { useNavigate } from "react-router-dom";
import styles from "./cstyles.module.css";
import { FiMenu } from "react-icons/fi";

const Menu = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/signup");
  };

  const loginClick = () => {
    nav("/login");
  };

  const homepage = () => {
    nav("/");
  };
  return (
    <section>
      <div className={styles.Menu_cont}>
        <p onClick={homepage}>Infohub</p>
        <nav>
          <ul className={styles.Menu_list}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/clubs">Clubs</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>
        </nav>

        <div className={styles.Buttons}>
          <button className={styles.TransparentButton} onClick={handleClick}>
            Signup
          </button>
          <button className={styles.TransparentButton} onClick={loginClick}>
            Login
          </button>
        </div>
        <FiMenu size={23} id={styles.icon} />
      </div>
    </section>
  );
};

export default Menu;
