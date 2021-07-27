import { useEffect, useState } from "react";
import { db } from "../firebase";

import Head from "next/head";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import styles from "../styles/Page.module.scss";
import Layout from "../components/Layout/Layout";
import { useSpots } from "./api/hello";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spots = [];
    // TODO consider using onSnapshot instead of get/then => thenetninja firebase #13
    db.collection("spots")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          spots.push({ ...doc.data(), id: doc.id });
        });
      })
      .then(() => {
        setData(spots);
        setLoading(false);
        console.log(data);
      });
  }, []);

  // TODO rework keywords since now its an array with one element
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
    setFilteredResult(result);
  };

  const renderCards = () => {
    if (filteredResult?.length) {
      return filteredResult.map((spot) => {
        return <Card key={spot._id} spot={spot} />;
      });
    }
    if (Array.isArray(filteredResult) && !filteredResult.length) {
      return (
        <p className={styles.noResultText}>No spots matching your search :(</p>
      );
    }
    return data?.map((spot) => {
      return <Card key={spot.id} spot={spot} />;
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
