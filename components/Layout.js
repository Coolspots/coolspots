import { useState } from "react";
import styles from "../styles/Layout.module.scss";
import Link from "next/link";
import classnames from "classnames";

const Layout = ({ children, spotName }) => {
  const [shouldShowForm, setShouldShowForm] = useState(false);
  return (
    <>
      <div
        className={classnames(styles.formOverlay, {
          [styles.open]: shouldShowForm,
        })}
      >
        <button
          onClick={() => {
            setShouldShowForm(!shouldShowForm);
          }}
        >
          Close
        </button>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdd7-87U1DYtqZ5MpIgyFx002T7-oifsXazpYXQjRBVlWHXNA/viewform?embedded=true"
          width="640"
          height="738"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <div className={styles.container}>
        <nav className={styles.navbarLayout}>
          <ul>
            <li className={styles.textLogo}>
              <Link href="/">coolspots</Link>
            </li>
            <li>
              <Link href="/howitworks">How It Works</Link>
            </li>
          </ul>
          <div className={styles.nameAndBookContainer}>
            <h1 className={styles.spotName}>{spotName}</h1>
            <button
              className={styles.bookBtn}
              onClick={() => {
                setShouldShowForm(!shouldShowForm);
              }}
            >
              Book
            </button>
          </div>
        </nav>
        <main className={styles.main}>{children}</main>
        <div className={styles.bookBtnBottomWrapper}>
          <button
            className={styles.bookBtn}
            onClick={() => {
              setShouldShowForm(!shouldShowForm);
            }}
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
