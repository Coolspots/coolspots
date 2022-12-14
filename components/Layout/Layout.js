import { useState } from "react";
import classnames from "classnames";
import styles from "../../styles/Layout.module.scss";
import Header from "./Header/Header";
import { useAuth } from "../../contexts/AuthContext";

const Layout = ({
  children,
  areSpotsLoaded,
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

  const [open, setOpen] = useState(false);

  const handleClickOverlay = (e) => {
    e.stopPropagation();
    setOpen((prevState) => !prevState);
  };

  const handleOpenDropdown = () => {
    setOpen((prevState) => !prevState);
  };

  const { login, logout, signup, currentUser } = useAuth();
  return (
    <>
      <div
        className={classnames({ [styles.overlay]: open })}
        onClick={handleClickOverlay}
      ></div>
      <div className={styles.container}>
        <Header
          showHeader={areSpotsLoaded}
          handleSearch={handleSearch}
          handleFilterByCity={handleFilterByCity}
          spotName={spotName}
          headerText={headerText}
          handleShowForm={handleShowForm}
          currentUser={currentUser}
          logout={logout}
          signup={signup}
          login={login}
          handleOpenDropdown={handleOpenDropdown}
          open={open}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
