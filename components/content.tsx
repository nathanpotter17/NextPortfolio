"use client";

import React, { useState } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/Gilded.png" },
    { src: "/Soldiers.png" },
    { src: "/st2.png" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const imageStyles = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: "transform 0.5s ease",
  };

  return (
    <>
      <div className={styles.header}>Welcome to Nathan's Portfolio.</div>
      <div className={styles.desc}>
        Software Developer and Multidisciplinary Designer
      </div>
      <div className={styles.pagecontent}>
        <div className={styles.currentEvents}>
          <div className={styles.event}>
            <h2>Locations</h2>
            <p>San Francisco, CA</p>
            <p>Vancouver, BC</p>
          </div>
          <div className={styles.event}>
            <h2>Skills</h2>
            <p>
              3d Rendering and Animation, Javascript, Python,{" "}
              <Link href="/blog">...more</Link>
            </p>
          </div>
        </div>
        <div className={styles.currentEvents}>
          <div className={styles.event}>
            <h2>Socials</h2>
            <p>See my LinkedIn</p>
            <div className={styles.resumeDownload}>
              <a
                className={styles.resumeLink}
                href="https://www.linkedin.com/in/nathan-potter1/"
              >
                &#127760;
              </a>
            </div>
          </div>
          <div className={styles.event}>
            <h2>Projects</h2>
            <p>
              Frontend, Data, Full-Stack Web,{" "}
              <a className={styles.a} href="https://github.com/nathanpotter17">
                ...here
              </a>
            </p>
          </div>
        </div>
        <div className={styles.simplecarousel}>
          <div className={styles.carouselcontainer}>
            <div className={styles.carouselinner} style={imageStyles}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.carouselslide} ${
                    index === currentSlide ? styles.active : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className={styles.carouselimage}
                  />
                </div>
              ))}
            </div>
            <button className={styles.prevbutton} onClick={prevSlide}>
              &lsaquo;
            </button>
            <button className={styles.nextbutton} onClick={nextSlide}>
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
