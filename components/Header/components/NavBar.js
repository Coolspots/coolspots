import Link from "next/link";
import styles from "../../../styles/Header.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.textLogo}>
          <Link href="/">coolspots</Link>
        </li>
        <li>
          <Link href="/howitworks">How It Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
