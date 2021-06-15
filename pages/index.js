import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import styles from "../styles/Page.module.scss";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setData(data);

      setLoading(false);
    } catch (error) {
      console.log("oh no!! there was en error!", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (str) => {
    const result = [];
    data.data.cities.map((city) => {
      return city.spots.map((spot) => {
        if (spot.keywords.toLowerCase().includes(str.toLowerCase())) {
          result.push(spot);
        }
      });
    });
    setFilteredResult(result);
  };

  const handleFilterByCity = (cityFromHeader) => {
    const result = [];
    data.data.cities.forEach((city) => {
      if (city.name.toLowerCase() === cityFromHeader.toLowerCase()) {
        result.push(city);
      }
    });
    setFilteredResult(result[0].spots);
  };

  const renderCards = () => {
    if (filteredResult?.length) {
      return filteredResult.map((spot) => {
        return <Card key={spot.name} spot={spot} />;
      });
    }
    if (Array.isArray(filteredResult) && !filteredResult.length) {
      return <p>No spots matching your search :(</p>;
    }
    return data.data.cities.map((city) => {
      return city.spots.map((spot) => {
        return <Card key={spot.name} spot={spot} />;
      });
    });
  };

  return (
    (!loading && (
      <div className={styles.page}>
        <Head>
          <title>Coolspots</title>
          <meta
            name="Coolspots coworking space coffeshop bar coffee"
            content="Coolspots home page"
          />
        </Head>
        <Header
          cities={data?.data?.cities}
          handleSearch={handleSearch}
          handleFilterByCity={handleFilterByCity}
        />
        <div className={styles.cardsContainer}></div>
        {renderCards()}
      </div>
    )) || <Loading />
  );
}

// export const getStaticProps = async () => {
//   // TODO replace with real call to backend endpoint to retrieve cities
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
