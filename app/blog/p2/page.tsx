"use client";
import React from "react";
import styles from "./p2.module.css";
import Link from "next/link";

export default function Post2() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src="/home.png" alt="Blog Post Image" className={styles.image} />
        <h1 className={styles.title}>Using Payload CMS with NextJS</h1>
        <p className={styles.date}>Published on December 18, 2023</p>
        <a
          style={{
            textDecoration: "underline",
            color: "#acacac50",
          }}
          href="https://github.com/nathanpotter17/NextE-Com"
        >
          My E-Commerce Project
        </a>
        <div className={styles.content}>
          <br />
          <p>
            In the fast-paced world of e-commerce, creating a seamless and
            well-structured online shopping experience is crucial. Recently, I
            undertook a project that aimed to achieve just that, utilizing the
            powerful combination of Next.js and Payload CMS.
          </p>
          <br />
          <h1 className={styles.title}>Why Next?</h1>
          <p>
            Next.js continues to gain popularity in the development community,
            and for good reason. Its server-side rendering, automatic code
            splitting, and ease of use make it an ideal choice for building
            high-performance web applications. In the context of e-commerce,
            these features are invaluable for delivering a fast and responsive
            user experience.
          </p>
          <br />
          <h1 className={styles.title}>Payload Features</h1>
          <p>
            Payload CMS serves as the backbone of content management in this
            project. Its user-friendly interface empowers even non-technical
            users to manage product listings, update content, and control the
            overall access structure of the e-commerce site. With Payload,
            developers can create flexible data models tailored to the specific
            needs of the platform. This can be found in{" "}
            <code>/payload/payload.config.ts</code>.
          </p>
          <br />
          <p>
            Collections stand out as a vital component in Payload. These
            collections are shaped by their configurations, providing you the
            flexibility to create as many as your application demands. With each
            collection, a new instance is automatically set up in your selected
            database, aligning with the fields you've defined. Picture
            collections as conventional database counterparts, each featuring a
            distinct URL, fields, labels, admin settings, and preferences for
            document authentication and uploads. For detailed information, refer
            to <code>/payload/payload-types.ts</code>.
          </p>
          <br />
          <p>
            Similar to collections, globals are one-off elements, perfect for
            use in headers, navigations, banners, or footers. Modifying the
            globals is the easiest way to quickly make your app stand out. Next,
            redefine the re-usables! Navigate to{" "}
            <code>./App/_Components/anyComponent</code>, find the component you
            want to change, and go to index.tsx and index.module.scss to begin
            component re-creation.
          </p>
          <br />
          <h1 className={styles.title}>Conclusion</h1>
          <p>
            Payload CMS stands as a testament to the capabilities of flexible
            data models in the realm of e-commerce. The integration of a robust
            frontend framework with a flexible and user-friendly content
            management system has resulted in a powerful platform that balances
            developer control with content management that anyone can
            understand.
          </p>
        </div>
        <br />
        <a
          style={{ textDecoration: "underline", color: "#acacac50" }}
          href="https://www.youtube.com/watch?v=3JUsg-WsU9o"
        >
          Source: JavaScript Mastery
        </a>
        <div className={styles.backButton}>
          <Link href="/blog">Back to Blog</Link>
        </div>
        <footer className={styles.footer}>
          <p>&copy; 2023 NSP Blog</p>
        </footer>
      </div>
    </div>
  );
}
