import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Searchbar/SearchBar";
import HeaderCities from "./components/HeaderCities/HeaderCities";
import styles from "./Header.module.scss";

const Header = ({
  data,
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
  const shouldShowSearchBar = data?.length > 0;

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
      {shouldShowSearchBar && (
        <>
          <SearchBar handleSearch={handleSearch} />
          <HeaderCities data={data} handleFilterByCity={handleFilterByCity} />
        </>
      )}
    </div>
  );
};

export default Header;
