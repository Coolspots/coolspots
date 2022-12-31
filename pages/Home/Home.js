import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../../contexts/AuthContext';
import Head from 'next/head';
import Card from '../../components/Card/Card';
import SpotList from '../../components/SpotList/SpotList';
import Loading from '../../components/Loading/Loading';
import styles from './Home.module.scss';
import Layout from '../../components/Layout/Layout';

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push('/Landing');
  }

  useEffect(() => {
    fetch('./api/spots')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading || !data.length) {
    return <Loading />;
  }

  // TODO rework keywords since now its an array with one element
  const handleSearch = (str) => {
    const result = [];
    // TODO rework search now it sucks
    data.forEach((spot) => {
      if (result.includes(spot)) {
        return;
      }
      if (spot.fields.city?.toLowerCase().includes(str.toLowerCase())) {
        result.push(spot);
      }
      spot.fields.tags?.forEach((tag) => {
        if (tag.toLowerCase().includes(str.toLowerCase()) && !result.includes(spot)) {
          result.push(spot);
        }
      });
    });

    setFilteredResult(result);
  };

  const handleFilterByCity = (cityFromHeader) => {
    const result = [];
    data.forEach((spot) => {
      if (spot.fields.city?.toLowerCase() === cityFromHeader.toLowerCase()) {
        result.push(spot);
      }
    });
    setFilteredResult(result);
  };

  const renderCards = () => {
    if (filteredResult?.length) {
      return <SpotList spots={filteredResult} />;
    }
    if (Array.isArray(filteredResult) && !filteredResult.length) {
      return <p className={styles.noResultText}>No spots matching your search :(</p>;
    }

    return <SpotList spots={data} />;
  };

  return (
    <Layout
      areSpotsLoaded={!!data.length}
      handleSearch={handleSearch}
      handleFilterByCity={handleFilterByCity}
      headerText="Book coffeeshops and co-working spaces to work from anywhere"
    >
      <Head>
        <title>Coolspots</title>
        <meta name="Coolspots coworking space coffeshop bar coffee" content="Coolspots home page" />
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
