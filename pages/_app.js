import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";
const App = ({ Component, pageProps }) => {
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  const [filterResult, setFilterResult] = useState(null);
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
      setCities(data.data.cities);
      const spots = data.data.cities.map((city) => city.spot);
      console.log("useSpot", spots);

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
    const filteredSpots = data.data.cities.map((city) => {
      return city.spots.map((spot) => {
        if (spot.keywords.toLowerCase().includes(str.toLowerCase())) {
          result.push(spot);
        }
      });
    });
    console.log(`filteredSpots result`, result);
    setFilterResult(result);
  };

  // const handleSearch = (str) => {
  //   const filteredCities = data.data.cities.filter((city) =>
  //     city.name.toLowerCase().includes(str.toLowerCase())
  //   );
  //   console.log("filterdata", filteredCities);
  //   setCities(filteredCities);
  // };

  return (
    !loading && (
      <Layout cities={cities} handleSearch={handleSearch}>
        <Component
          cities={cities}
          filterResult={filterResult}
          handleSearch={handleSearch}
          {...pageProps}
        />
      </Layout>
    )
  );
};

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

export default App;
