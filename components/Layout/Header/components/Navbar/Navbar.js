import { useState } from "react";
import classnames from "classnames";

import Link from "next/link";
import styles from "./Navbar.module.scss";

const NavBar = ({ spotName, headerText, handleShowForm }) => {
  const [open, setOpen] = useState(false);
  // mock user for testing purposes
  const user = null;
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={classnames({ [styles.open]: open })}>
          <li className={styles.textLogo}>
            <Link href="/">coolspots</Link>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
          >
            |||
            <div>
              <Link href="/howitworks">How it works</Link>
              {user ? (
                <Link href="/">Logout</Link>
              ) : (
                <Link href="/auth">Login</Link>
              )}
            </div>
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
      <span></span>
    </>
  );
};

export default NavBar;
