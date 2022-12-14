import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useRouter } from "next/router";

import Head from "next/head";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import styles from "./Home.module.scss";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push("/Landing");
  }
  useEffect(async () => {
    // const spots = [];
    // // TODO consider using onSnapshot instead of get/then => thenetninja firebase #13
    // db.collection("spots")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       spots.push({ ...doc.data(), id: doc.id });
    //     });
    //   })
    //   .then(() => {
    //     setData(spots);
    //     setLoading(false);
    //   });

    fetch(
      `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE}?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.records);
        setLoading(false);
      });
  }, []);

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
        if (
          tag.toLowerCase().includes(str.toLowerCase()) &&
          !result.includes(spot)
        ) {
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
      return filteredResult.map((spot) => {
        return (
          <Card
            key={spot.id}
            // TODO remove extension of spot object when the real images are in Airtable
            spot={{
              ...spot,
              fields: {
                ...spot.fields,
                images: [
                  "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-28.jpg",
                ],
                priceFrom: "20",
              },
            }}
          />
        );
      });
    }
    if (Array.isArray(filteredResult) && !filteredResult.length) {
      return (
        <p className={styles.noResultText}>No spots matching your search :(</p>
      );
    }

    return data?.map((spot) => {
      return (
        <Card
          key={spot.id}
          // TODO remove extension of spot object when the real images are in Airtable
          spot={{
            ...spot,
            fields: {
              ...spot.fields,
              images: [
                "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-28.jpg",
              ],
              priceFrom: "20",
            },
          }}
        />
      );
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout
      areSpotsLoaded={!!data.length}
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
