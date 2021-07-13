import { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./HeaderCities.module.scss";

const HeaderCities = ({ data, handleFilterByCity }) => {
  // const [cityTilesInfo, setCiTyTilesInfo] = useState([]);
  // cities is a temporary array until we decide how to manage the cities we work with
  const cities = [
    {
      name: "Padova",
      description:
        "Padua is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area. Padua's population is 214,000.",
      img: "https://images.pexels.com/photos/4513657/pexels-photo-4513657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "Valencia",
      description:
        "Valencia is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area. Padua's population is 214,000.",
      img: "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "Barcelona",
      description:
        "Barcelona is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area. Padua's population is 214,000.",
      img: "https://image.arrivalguides.com/415x300/02/f2cd31a89b0c335751b11fa8dea987a9.jpg",
    },
  ];

  const handleFilter = (name) => {
    handleFilterByCity(name);
  };

  const renderCities = () => {
    return cities?.map((city) => {
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
