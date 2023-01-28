import styles from './Burger.module.scss';
const Burger = ({ handleOpenDropdown, isMenuOpen }) => {
  return (
    <div className={styles.wrapper} onClick={handleOpenDropdown}>
      <div className={`${styles.burgerMenu} ${isMenuOpen && styles.menuOn}`}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </div>
  );
};

export default Burger;
