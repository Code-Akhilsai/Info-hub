import styles from "./cstyles.module.css";

const Aboutsec = () => {
  return (
    <div className={styles.about_container}>
      <h1 className={styles.about_title}>About InfoHub</h1>
      <p className={styles.about_description}>
        InfoHub is your one-stop platform to explore and connect with the
        vibrant community of clubs, societies, and events at your institution.
        Whether you're a tech enthusiast, a sports lover, an artist, or someone
        looking to make meaningful connections, InfoHub has something for
        everyone.
      </p>
      <p className={styles.about_description}>
        Our mission is to bring people together, foster creativity, and provide
        opportunities for personal and professional growth. Discover exciting
        events, join like-minded communities, and make the most of your journey
        with InfoHub.
      </p>
      <div className={styles.about_features}>
        <div className={styles.feature_item}>
          <h3>Explore Clubs</h3>
          <p>Find clubs that match your interests and passions.</p>
        </div>
        <div className={styles.feature_item}>
          <h3>Stay Updated</h3>
          <p>Get notified about upcoming events, workshops, and activities.</p>
        </div>
        <div className={styles.feature_item}>
          <h3>Seamless Signup</h3>
          <p>Join clubs effortlessly with our integrated signup system.</p>
        </div>
        <div className={styles.feature_item}>
          <h3>Community Building</h3>
          <p>Connect with peers and build lasting relationships.</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Aboutsec;
