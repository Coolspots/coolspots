import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Spot = () => {
  const router = useRouter();
  const [spotData, setSpotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { spotId } = router.query;

  const getSpot = async () => {
    try {
      const response = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const result = [];
      data.data.cities.map((city) => {
        return city.spots.map((spot) => {
          if (spot.id === spotId) {
            result.push(spot);
          }
        });
      });
      setSpotData(result);
      setLoading(false);
      console.log("spotData", spotData);
    } catch (error) {
      console.log("oh no!! there was en error!", error);
    }
  };

  useEffect(() => {
    getSpot();
  }, []);
  const spot = spotData[0];
  return (!loading && <div>{spot.name}</div>) || <p>Loading...</p>;
};

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log("params", params);
// }

export default Spot;
