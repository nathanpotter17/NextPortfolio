import Link from "next/link";
import styles from "../app/page.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">NSP.</Link>
      </div>
      <div className={styles.bcont}>
        <div className={styles.navbutton}>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
