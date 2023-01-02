import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/SearchBar';
import styles from './Header.module.scss';

const Header = ({
  showHeader,
  handleSearch,
  headerText,
  handleOpenDropdown,
  spotName,
  handleShowForm,
  signup,
  login,
  currentUser,
  logout,
  open,
}) => {
  return (
    <div className={styles.header}>
      <Navbar
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
      {showHeader && (
        <>
          <SearchBar handleSearch={handleSearch} />
        </>
      )}
    </div>
  );
};

export default Header;
