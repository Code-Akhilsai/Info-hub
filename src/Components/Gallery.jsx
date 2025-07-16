import styles from "./cstyles.module.css";
import img1 from "../assets/gallery/image.webp";
import img2 from "../assets/gallery/img2.webp";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";

const Gallery = () => {
  const images = [img6, img2, img3, img4, img5, img1, img7, img8, img9];

  return (
    <div className={styles.gallery_container}>
      <h1 className={styles.gallery_title}>Gallery</h1>
      <div className={styles.gallery_grid}>
        {images.map((image, index) => (
          <div key={index} className={styles.gallery_item}>
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className={styles.gallery_image}
              loading="lazy"
            />
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
    </div>
  );
};

export default Gallery;
