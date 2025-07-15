import styles from "./cstyles.module.css";
import photography from "../assets/photo.jpg";
import cultural from "../assets/cultural2.jpg";
import sports from "../assets/sports2.jpg";
import tech from "../assets/tech.jpg";
import music from "../assets/music.jpg";
import literature from "../assets/literature.jpg";
import drama from "../assets/drama.jpg";
import envi from "../assets/environ.jpg";

const Clubs = () => {
  const baseFormLink = "https://forms.gle/sAtTseZu5PFWVxVj6";

  const clubs = [
    {
      id: 1,
      title: "Photography Club",
      description: "Capture moments and tell stories through your lens.",
      image: photography,
    },
    {
      id: 2,
      title: "Cultural Club",
      description: "Celebrate diversity and creativity with cultural events.",
      image: cultural,
    },
    {
      id: 3,
      title: "Sports Club",
      description: "Unleash your energy and join exciting sports activities.",
      image: sports,
    },
    {
      id: 4,
      title: "Technology Club",
      description: "Explore the latest in tech and innovation.",
      image: tech,
    },
    {
      id: 5,
      title: "Music Club",
      description: "Express yourself through melodies and rhythms.",
      image: music,
    },
    {
      id: 6,
      title: "Literature Club",
      description: "Dive into the world of books, poetry, and storytelling.",
      image: literature,
    },
    {
      id: 7,
      title: "Drama Club",
      description: "Showcase your acting skills and bring stories to life.",
      image: drama,
    },
    {
      id: 8,
      title: "Environment Club",
      description: "Work towards a greener and more sustainable future.",
      image: envi,
    },
  ];

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "2.5rem",
        }}
      >
        Clubs
      </h1>
      <div className={styles.clubs_container}>
        {clubs.map((club) => (
          <div key={club.id} className={styles.club_card}>
            <img
              src={club.image}
              alt={club.title}
              className={styles.club_image}
              loading="lazy"
            />
            <h3 className={styles.club_title}>{club.title}</h3>
            <p className={styles.club_description}>{club.description}</p>
            <button
              className={styles.club_button}
              onClick={() =>
                window.open(
                  `${baseFormLink}?club=${encodeURIComponent(club.title)}`,
                  "_blank"
                )
              }
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Clubs;
