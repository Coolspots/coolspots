import styles from "../styles/Layout.module.scss";
import Header from "./Header/Header";

const Layout = ({ children, cities, handleSearch }) => {
  return (
    <>
      <Header cities={cities} handleSearch={handleSearch} />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
