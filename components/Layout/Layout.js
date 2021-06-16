import styles from "../../styles/Layout.module.scss";
import Header from "./Header/Header";

const Layout = ({
  children,
  cities,
  handleSearch,
  handleFilterByCity,
  spotName,
  setShouldShowForm,
  shouldShowForm,
  headerText,
}) => {
  const handleShowForm = () => {
    setShouldShowForm(!shouldShowForm);
  };
  return (
    <>
      <div className={styles.container}>
        <Header
          cities={cities}
          handleSearch={handleSearch}
          handleFilterByCity={handleFilterByCity}
          spotName={spotName}
          headerText={headerText}
          handleShowForm={handleShowForm}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
