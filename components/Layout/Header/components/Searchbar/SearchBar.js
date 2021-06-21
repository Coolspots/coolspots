import { useState } from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Valencia..."
        value={value}
      />
    </div>
  );
};

export default SearchBar;
