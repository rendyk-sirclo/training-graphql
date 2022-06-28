import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/subscribe">
          <a style={{ marginLeft: "2rem" }}>Subscribe Email</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
