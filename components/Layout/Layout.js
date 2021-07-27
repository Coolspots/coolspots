import { useState } from "react";
import classnames from "classnames";
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

  const [open, setOpen] = useState(false);

  const handleClickOverlay = (e) => {
    e.stopPropagation();
    console.log(e.target);
  };

  const handleOpenDropdown = () => {
    console.log(open);
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
          handleOpenDropdown={handleOpenDropdown}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
