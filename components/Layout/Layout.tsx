import { useState } from 'react';
import classnames from 'classnames';
import styles from '../../styles/Layout.module.scss';
import Header from './Header/Header';
import CitiesFilter from './Citiesfilter/CitiesFilter';
import { useAuth } from '../../contexts/AuthContext';

type LayoutProps = {
  headerText: string;
  children: Element[] | React.ReactNode;
  areSpotsLoaded: boolean;
  handleSearch: (a: string) => void;
  handleFilterByCity: (a: string) => void;
  spotName?: string;
  shouldShowForm?: boolean;
  setShouldShowForm?: (a: boolean) => void;
};

const Layout = ({
  children,
  areSpotsLoaded,
  handleSearch,
  handleFilterByCity,
  spotName,
  setShouldShowForm,
  shouldShowForm,
  headerText,
}: LayoutProps): JSX.Element => {
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
      <div className={classnames({ [styles.overlay]: open })} onClick={handleClickOverlay}></div>
      <div className={styles.container}>
        <Header
          showHeader={areSpotsLoaded}
          handleSearch={handleSearch}
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
        <CitiesFilter handleFilterByCity={handleFilterByCity} />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
