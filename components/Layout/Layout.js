import styles from "../../styles/Layout.module.scss";
import Header from "./Header/Header";
import { useAuth } from "../../contexts/AuthContext";

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
  const handleShowForm = () => {
    setShouldShowForm(!shouldShowForm);
  };
  const { login, logout, signup, currentUser } = useAuth();
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
          currentUser={currentUser}
          logout={logout}
          signup={signup}
          login={login}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
