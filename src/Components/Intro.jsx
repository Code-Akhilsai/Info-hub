import styles from "./cstyles.module.css";
import Spline from "@splinetool/react-spline";

const Intro = () => {
  return (
    <>
      <section className={styles.Intro}>
        <div className={styles.Intro_cont}>
          <p className={styles.Intro_title}>Explore, Connect, Engage</p>

          <p className={styles.Intro_subtitle}>
            Infohub is a platform that connects students with clubs and
            societies at their university.
            <br /> It provides a centralized hub for students to discover, join,
            and engage with various clubs, <br />
            enhancing their campus experience.
          </p>
        </div>

        <div className={styles.SplineContainer}>
          {/*  <Spline
            scene="https://prod.spline.design/3bKaZJ4oG9sYgruW/scene.splinecode"
            loading="lazy"
          />*/}
        </div>
      </section>
    </>
  );
};

export default Intro;
