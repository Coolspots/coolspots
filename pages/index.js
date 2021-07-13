import { useEffect, useState } from "react";
import Head from "next/head";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import styles from "../styles/Page.module.scss";
import Layout from "../components/Layout/Layout";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/spots", {
        method: "GET",
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
    data.map((spot) => {
      if (spot.keywords.toLowerCase().includes(str.toLowerCase())) {
        result.push(spot);
      }
    });
    setFilteredResult(result);
  };

  const handleFilterByCity = (cityFromHeader) => {
    const result = [];
    data.forEach((spot) => {
      if (spot.city.toLowerCase() === cityFromHeader.toLowerCase()) {
        result.push(spot);
      }
    });
    console.log("results filter city", result);

    setFilteredResult(result);
  };

  const renderCards = () => {
    if (filteredResult?.length) {
      return filteredResult.map((spot) => {
        return <Card key={spot._id} spot={spot} />;
      });
    }
    if (Array.isArray(filteredResult) && !filteredResult.length) {
      return <p>No spots matching your search :(</p>;
    }
    return data.map((spot) => {
      return <Card key={spot._id} spot={spot} />;
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout
      data={data}
      handleSearch={handleSearch}
      handleFilterByCity={handleFilterByCity}
      headerText="Book coffeeshops and co-working spaces to work from anywhere"
    >
      <Head>
        <title>Coolspots</title>
        <meta
          name="Coolspots coworking space coffeshop bar coffee"
          content="Coolspots home page"
        />
      </Head>
      <div className={styles.cardsContainer}></div>
      {renderCards()}
    </Layout>
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
