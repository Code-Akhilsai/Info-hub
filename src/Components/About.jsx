import styles from "./cstyles.module.css";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <section>
      <h1 className={styles.About_title} id="about">
        About
      </h1>
      <div className={styles.About_cont}>
        <div className={styles.SplineContainer2}>
          {/* <Spline
            scene="https://prod.spline.design/vEFcTaBOD7yFGvec/scene.splinecode"
            loading="lazy"
          />{" "}*/}
        </div>
        <p className={styles.About_text}>
          Infohub is a platform designed to connect students with clubs,
          societies, and events at their university. Our mission is to enhance
          the campus experience by providing a centralized hub for students to
          discover opportunities, build connections, and engage with their
          community. Whether you're looking to join a club, organize an event,
          or simply explore what's happening on campus, Infohub is here to make
          it easy and accessible for everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
