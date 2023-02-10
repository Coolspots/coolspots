import styles from './CitiesFilter.module.scss';

const HeaderCities = ({ handleFilterByCity }) => {
  const cities = [
    {
      name: 'Padova',
      country: 'Italy',
      description:
        'Padua is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area.',
      img: 'https://images.pexels.com/photos/4513657/pexels-photo-4513657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Valencia',
      country: 'Spain',
      description:
        'Valencia is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area.',
      img: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Barcelona',
      country: 'Spain',
      description:
        'Barcelona is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area.',
      img: 'https://image.arrivalguides.com/415x300/02/f2cd31a89b0c335751b11fa8dea987a9.jpg',
    },
    {
      name: 'Amsterdam',
      country: 'Netherlands',
      description:
        'Amsterdam is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area.',
      img: 'https://image.arrivalguides.com/415x300/02/f2cd31a89b0c335751b11fa8dea987a9.jpg',
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
          style={{ backgroundImage: 'url(' + city.img + ')' }}
          key={city.name}
        >
          <h3>{city.name}</h3>
        </li>
      );
    });
  };
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Available locations</h2>
      <button>See All</button>
      <ul className={styles.cityList}>{renderCities()}</ul>
    </section>
  );
};

export default HeaderCities;
