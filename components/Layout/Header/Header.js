import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Searchbar/SearchBar";
import HeaderCities from "./components/HeaderCities/HeaderCities";
import styles from "./Header.module.scss";

const Header = ({
  showHeader,
  handleSearch,
  handleFilterByCity,
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
          <HeaderCities handleFilterByCity={handleFilterByCity} />
        </>
      )}
    </div>
  );
};

export default Header;
