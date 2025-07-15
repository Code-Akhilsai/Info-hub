import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";

const DistortionSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      view: sliderRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
    });

    const images = [
      "/assets/cultural.png",
      "/assets/photography.png",
      "/assets/sports.png",
    ];

    const displacementTexture = PIXI.Texture.from(
      "/assets/displacement-map.png"
    );
    const displacementSprite = new PIXI.Sprite(displacementTexture);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.scale.set(2);
    app.stage.addChild(displacementSprite);

    // Create container for slides
    const container = new PIXI.Container();
    app.stage.addChild(container);

    // Add images as slides
    const slides = images.map((image) => {
      const texture = PIXI.Texture.from(image);
      const sprite = new PIXI.Sprite(texture);
      sprite.width = app.view.width; // Use app.view.width
      sprite.height = app.view.height; // Use app.view.height
      container.addChild(sprite);
      return sprite;
    });

    // Set initial slide visibility
    slides.forEach((slide, i) => (slide.alpha = i === 0 ? 1 : 0));

    let currentIndex = 0;

    // Function to show the next slide
    const showSlide = (index) => {
      const nextSlide = slides[index];
      const currentSlide = slides[currentIndex];

      // Distortion animation
      gsap.to(displacementSprite.scale, {
        x: 10,
        y: 10,
        duration: 1,
        onComplete: () => {
          gsap.to(displacementSprite.scale, { x: 2, y: 2, duration: 1 });
        },
      });

      // Fade out current slide and fade in next slide
      gsap.to(currentSlide, { alpha: 0, duration: 1 });
      gsap.to(nextSlide, { alpha: 1, duration: 1 });

      currentIndex = index;
    };

    // Add event listeners for navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      app.destroy(true, { children: true });
    };
  }, []);

  return <canvas ref={sliderRef} style={{ width: "100%", height: "100vh" }} />;
};

export default DistortionSlider;
