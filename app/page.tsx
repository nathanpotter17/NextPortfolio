import styles from "./page.module.css";
import Content from "@/components/content";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className={styles.container}>
      <Content />
      <Contact />
      <footer className={styles.footer}>
        <p>&copy; 2023 NSP</p>
      </footer>
    </main>
  );
}
