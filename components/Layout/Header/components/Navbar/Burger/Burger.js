import { useState } from "react";
import styles from "./Burger.module.scss";
const Burger = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className={styles.wrap} onClick={() => setIsOpen(!open)}>
      <div className={`${styles.burgerMenu} ${open && styles.menuOn}`}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </div>
  );
};

export default Burger;
