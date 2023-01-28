import SearchBar from './components/Searchbar/SearchBar';
import styles from './Header.module.scss';

const Header = ({ showHeader, handleSearch, headerText }) => {
  return (
    <div className={styles.header}>
      {showHeader && (
        <>
          <h2 className={styles.headerText}>{headerText}</h2>
          <SearchBar handleSearch={handleSearch} />
        </>
      )}
    </div>
  );
};

export default Header;
