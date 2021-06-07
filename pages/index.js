import { useEffect, useState } from "react";
import Head from "next/head";
import Card from "../components/Card/Card";
import styles from "../styles/Page.module.scss";

export default function Home({ filterResult, cities }) {
  const [results, setResults] = useState(null);
  useEffect(() => {
    setResults(filterResult);
  }, [filterResult]);

  const renderCards = () => {
    if (results?.length) {
      return results.map((spot) => {
        return <Card key={spot.name} spot={spot} />;
      });
    }
    if (Array.isArray(results) && !results.length) {
      return <p>No spots matching your search :(</p>;
    }
    return cities.map((city) => {
      return city.spots.map((spot) => {
        return <Card key={spot.name} spot={spot} />;
      });
    });
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Coolspots</title>
        <meta
          name="Coolspots coworking space coffeshop bar coffee"
          content="Coolspots home page"
        />
      </Head>
      {renderCards()}
    </div>
  );
}
