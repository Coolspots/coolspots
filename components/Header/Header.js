import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import HeaderCities from "./components/HeaderCities";
import styles from "../../styles/Header.module.scss";

const Header = ({ cities, handleSearch, handleFilterByCity }) => {
  return (
    <div className={styles.header}>
      <NavBar />
      <div className={styles.headerSlogan}>
        <p>Book coffeeshops and co-working spaces to work from anywhere</p>
      </div>
      <SearchBar handleSearch={handleSearch} />
      <HeaderCities cities={cities} handleFilterByCity={handleFilterByCity} />
    </div>
  );
};

export default Header;
