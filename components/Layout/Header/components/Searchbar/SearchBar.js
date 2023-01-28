import { useState } from 'react';
import Image from 'next/image';
import styles from './SearchBar.module.scss';

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.magnifyingGlass}>
        <Image src="/icons/MagnifyingGlass.svg" height={30} width={30} />
      </div>
      <input type="text" onChange={handleChange} placeholder="Search" value={value} />
    </div>
  );
};

export default SearchBar;
