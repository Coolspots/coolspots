import { useState } from "react";
import styles from "../../styles/Layout.module.scss";
import Link from "next/link";
import classnames from "classnames";

const Layout = ({ children, spotName, setShouldShowForm, shouldShowForm }) => {
  const handleShowForm = () => {
    setShouldShowForm(!shouldShowForm);
  };
  return (
    <>
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
          {(spotName && (
            <div className={styles.nameAndBookContainer}>
              <h1 className={styles.spotName}>{spotName}</h1>
              <button className={styles.bookBtn} onClick={handleShowForm}>
                Book
              </button>
            </div>
          )) || (
            <div className={styles.howItWorksHeaderText}>
              <p>
                Social, comfy workspaces with discounts for remote workers,
                nomads, entrepreneurs and students
              </p>
            </div>
          )}
        </nav>
        <main className={styles.main}>{children}</main>
        {/* <div className={styles.bookBtnBottomWrapper}>
          <button
            className={styles.bookBtn}
            onClick={() => {
              setShouldShowForm(!shouldShowForm); // esto cambiara
            }}
          >
            Book
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Layout;
