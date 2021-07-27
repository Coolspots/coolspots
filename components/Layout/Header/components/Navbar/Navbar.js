import { useRouter } from "next/router";
import { useState } from "react";
import classnames from "classnames";
import Burger from "./Burger/Burger";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const NavBar = ({
  spotName,
  headerText,
  currentUser,
  logout,
  handleShowForm,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logout();
      router.push("/");
    } catch (err) {
      setError(err.message);
      alert(error);
    }
    setLoading(false);
  };

  const handleClickOverlay = (e) => {
    e.stopPropagation();
    console.log(e.target);
  };

  return (
    <>
      <div
        className={classnames({ [styles.overlay]: open })}
        onClick={handleClickOverlay}
      ></div>
      <nav className={styles.navbar}>
        <ul className={classnames({ [styles.open]: open })}>
          <div className={styles.logoAndBurgerWrapper}>
            <li className={styles.textLogo}>
              <Link href="/">coolspots</Link>
            </li>
            <li
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Burger open={open} />
            </li>
          </div>
          <div className={styles.dropdownLinks}>
            <Link href="/howitworks">How it works</Link>
            {currentUser ? (
              <button className={styles.logBtn} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className={styles.logoutBtn} href="/auth">
                <button className={styles.logBtn}>Login</button>
              </Link>
            )}
          </div>
        </ul>
        {(spotName && (
          <div className={styles.nameAndBookContainer}>
            <h1 className={styles.spotName}>{spotName}</h1>
            <button
              className={styles.bookBtn}
              onClick={() => {
                currentUser ? handleShowForm() : router.push("/auth");
              }}
            >
              Book
            </button>
          </div>
        )) || (
          <div className={classnames(styles.howItWorksHeaderText)}>
            <p>{headerText}</p>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
