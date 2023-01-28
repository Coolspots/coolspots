import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import Head from 'next/head';
import SpotList from '../../components/SpotList/SpotList';
import Loading from '../../components/Loading/Loading';
import styles from './Home.module.scss';
import Layout from '../../components/Layout/Layout';
import { Spot } from '../../types/types';

type ServerSideProps = {
  serverSideSpots: Spot[];
};

export default function Home({ serverSideSpots = [] }: ServerSideProps) {
  const [spots, setSpots] = useState(serverSideSpots);
  const [filteredResult, setFilteredResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push('/landing');
  }

  useEffect(() => {
    fetch('./api/spots')
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  if (loading || !spots.length) {
    return <Loading />;
  }

  // TODO rework keywords since now its an array with one element
  const handleSearch = (str) => {
    const result = [];
    // TODO rework search now it sucks
    spots.forEach((spot) => {
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
    spots.forEach((spot) => {
      if (spot.fields.city?.toLowerCase() === cityFromHeader.toLowerCase()) {
        result.push(spot);
      }
    });
    setFilteredResult(result);
  };

  const renderSpotList = (): React.ReactNode => {
    if (filteredResult?.length) {
      return <SpotList spots={filteredResult} />;
    }
    if (Array.isArray(filteredResult) && !filteredResult.length) {
      return <p className={styles.noResultText}>No spots matching your search :(</p>;
    }

    return <SpotList spots={spots} />;
  };

  return (
    <>
      <Head key="Home">
        <title>Coolspots</title>
        <meta name="Coolspots coworking space coffeshop bar coffee" content="Coolspots home page" />
      </Head>
      <Layout
        areSpotsLoaded={!!spots.length}
        handleSearch={handleSearch}
        handleFilterByCity={handleFilterByCity}
        headerText="Book coffeeshops and co-working spaces to work from anywhere"
        showHeader
        showCitiesFilter
      >
        {renderSpotList()}
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  // TODO replace with real call to backend endpoint to retrieve cities
  const res = await fetch('./api/spots');
  const serverSideSpots = await res.json();

  return {
    props: {
      data: serverSideSpots,
    },
  };
};
