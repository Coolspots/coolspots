import styles from "../../styles/Layout.module.scss";
import Header from "./Header/Header";

const Layout = ({
  children,
  data,
  handleSearch,
  handleFilterByCity,
  spotName,
  setShouldShowForm,
  shouldShowForm,
  headerText,
}) => {
  console.log("handleFilterByCity :>> ", handleFilterByCity);
  const handleShowForm = () => {
    setShouldShowForm(!shouldShowForm);
  };
  return (
    <>
      <div className={styles.container}>
        <Header
          data={data}
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
