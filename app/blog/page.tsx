import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";

const Blog: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          <img
            src="https://placekitten.com/800/400"
            alt="Blog Post Image"
            className={styles.image}
          />
          <h2 className={styles.postTitle}>Creating ThreeJS Apps</h2>
          <p className={styles.postDate}>Published on October 30, 2023</p>
          <p className={styles.postContent}>
            Building immersive 3D web applications has become easier with the
            integration of React, JSX, and Three.js. Let's dive into creating a
            basic Three.js scene within a React app.
          </p>
          <Link href="/blog/p1" className={styles.readMoreLink}>
            Read more
          </Link>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 NSP Blog</p>
      </footer>
    </div>
  );
};

export default Blog;
