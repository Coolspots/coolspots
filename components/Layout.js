import styles from "../styles/Layout.module.scss";
import Header from "./Header/Header";

const Layout = ({ children, cities, handleSearch, handleFilterByCity }) => {
  return (
    <>
      <Header
        cities={cities}
        handleSearch={handleSearch}
        handleFilterByCity={handleFilterByCity}
      />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
