import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";

const Blog: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          <img src="/home.png" alt="Blog Post Image" className={styles.image} />
          <h2 className={styles.postTitle}>Using Payload CMS with NextJS</h2>
          <p className={styles.postDate}>Published on December 18, 2023</p>
          <p className={styles.postContent}>
            Recently, I undertook a project that utilized the powerful
            combination of Next.js and Payload CMS. The result was a powerful
            production ready SEO web shop with Stripe payment integration.
          </p>
          <Link href="/blog/p2" className={styles.readMoreLink}>
            Read more
          </Link>
        </article>
        <article className={styles.article}>
          <img
            src="/stillroom.png"
            alt="Blog Post Image"
            className={styles.image}
          />
          <h2 className={styles.postTitle}>Creating ThreeJS Apps with React</h2>
          <p className={styles.postDate}>Published on October 30, 2023</p>
          <p className={styles.postContent}>
            Building immersive 3D web applications has become easier with the
            integration of React and Three.js. Let's dive into creating a basic
            Three.js scene within a React app.
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
