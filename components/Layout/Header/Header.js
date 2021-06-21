import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Searchbar/SearchBar";
import HeaderCities from "./components/HeaderCities/HeaderCities";
import styles from "./Header.module.scss";

const Header = ({
  data,
  handleSearch,
  handleFilterByCity,
  headerText,
  spotName,
  handleShowForm,
}) => {
  console.log("handleFilterByCity :>> ", handleFilterByCity);
  const shouldShowSearchBar = data?.length > 0;
  return (
    <div className={styles.header}>
      <Navbar
        spotName={spotName}
        headerText={headerText}
        handleShowForm={handleShowForm}
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
