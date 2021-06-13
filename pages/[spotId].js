import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/DetailPage.module.scss";

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
            console.log("push spot", spot);

            result.push(spot);
          }
        });
      });
      console.log("data :>> ", data);
      setSpotData(result[0]);
      setLoading(false);
    } catch (error) {
      console.log("oh no!! there was en error!", error);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    getSpot();
  }, [router.isReady]);

  const renderGallery = () => {
    const gallery = spotData.images.map((img) => {
      return <img src={`${img}`} alt={`${spotData.name} image`} />;
    });
    return gallery;
  };

  return (
    (!loading && (
      <Layout spotName={spotData.name}>
        <div className={styles.gallery}>
          <h3>Gallery</h3>
          {renderGallery()}
        </div>
        <div className={styles.amenities}></div>
      </Layout>
    )) || <p>Loading...</p>
  );
};

// TODO implement getStaticPaths and getStaticProps when the props come from backend

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   console.log("params", params);
// }

export default Spot;
