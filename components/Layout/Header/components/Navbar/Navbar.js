import Link from "next/link";
import styles from "./Navbar.module.scss";

const NavBar = ({ spotName, headerText, handleShowForm }) => {
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
      {(spotName && (
        <div className={styles.nameAndBookContainer}>
          <h1 className={styles.spotName}>{spotName}</h1>
          <button className={styles.bookBtn} onClick={handleShowForm}>
            Book
          </button>
        </div>
      )) || (
        <div className={styles.howItWorksHeaderText}>
          <p>{headerText}</p>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
