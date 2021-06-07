import { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "../../../styles/Header.module.scss";

const HeaderCities = ({ cities, handleFilterByCity }) => {
  const [cityTilesInfo, setCiTyTilesInfo] = useState([]);
  useEffect(() => {
    setCiTyTilesInfo(cities);
  }, []);

  const handleFilter = (name) => {
    handleFilterByCity(name);
  };

  const renderCities = () => {
    return cityTilesInfo.map((city) => {
      return (
        <li
          onClick={() => handleFilter(city.name)}
          className={styles.headerCityCard}
          style={{ backgroundImage: "url(" + city.img + ")" }}
          key={city.name}
        >
          <h2>{city.name}</h2>
        </li>
      );
    });
  };
  return <ul className={classnames(styles.headerCities)}>{renderCities()}</ul>;
};

export default HeaderCities;
