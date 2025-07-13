import { useNavigate } from "react-router-dom";
import styles from "./cstyles.module.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
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
        <FiMenu
          size={23}
          id={styles.icon}
          onClick={toggleDrawer}
          className={styles.burgericon}
        />

        {/* Nav Drawer */}
        {isDrawerOpen && (
          <div className={styles.drawer}>
            <IoMdClose
              size={28}
              onClick={closeDrawer}
              className={styles.closeicon}
            />

            <a href="/" className={styles.drawerlink} onClick={closeDrawer}>
              Home
            </a>
            <a
              href="/clubs"
              className={styles.drawerlink}
              onClick={closeDrawer}
            >
              Clubs
            </a>
            <a
              href="/about"
              className={styles.drawerlink}
              onClick={closeDrawer}
            >
              About
            </a>
            <a
              href="/gallery"
              className={styles.drawerlink}
              onClick={closeDrawer}
            >
              Gallery
            </a>

            <div className={styles.Buttons2}>
              <button
                className={styles.TransparentButton2}
                onClick={handleClick}
              >
                Signup
              </button>
              <button
                className={styles.TransparentButton2}
                onClick={loginClick}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
