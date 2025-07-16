import { useState } from "react";
import styles from "./cstyles.module.css";

// Import images from the src/assets folder
import culturalImage from "../assets/cultural.png";
import photographyImage from "../assets/photography.png";
import sportsImage from "../assets/sports.png";
import tech from "../assets/techc.webp";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const explore = useNavigate();
  const handleExplore = () => {
    explore("/clubs");
  };

  const images = [culturalImage, photographyImage, sportsImage, tech];
  const texts = [
    "Cultural Club",
    "Photography Club",
    "Sports Club",
    "Technical Club",
  ];
  const des = [
    "Immerse yourself in the vibrant world of cultural festivities. From traditional dances to modern art exhibitions, experience the essence of creativity and heritage. Celebrate diversity and connect with like-minded individuals who share your passion for culture.",
    "Step into the world of photography and capture moments that tell stories. Whether you're a beginner or a seasoned photographer, explore workshops, contests, and exhibitions that inspire creativity. Let your lens showcase the beauty of the world around you.",
    "Unleash your competitive spirit and embrace the thrill of sports. Join teams, participate in tournaments, and push your limits with exciting challenges. Build camaraderie, stay active, and experience the joy of teamwork and achievement.",
    "Explore the latest in technology through workshops, hackathons, and projects. Collaborate with peers to innovate, solve real-world problems, and shape the future of tech.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.featured_container}>
      <p className={styles.featured_title}>Featured</p>
      <div className={styles.featured_image_container}>
        <img
          src={images[currentIndex]}
          alt={`Featured ${currentIndex + 1}`}
          className={styles.featured_image}
        />
        {/* Overlay Text and Button */}
        <div className={styles.overlay}>
          <h2 className={styles.overlay_text}>{texts[currentIndex]}</h2>
          <p className={styles.overlay_description}>{des[currentIndex]}</p>
          <button className={styles.overlay_button} onClick={handleExplore}>
            Explore
          </button>
        </div>
        <div className={styles.featured_dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active_dot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
