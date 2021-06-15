import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Loading from "../components/Loading/Loading";
import styles from "../styles/DetailPage.module.scss";
import classnames from "classnames";

const Spot = () => {
  const router = useRouter();
  const [spotData, setSpotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldShowForm, setShouldShowForm] = useState(false);
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
      setSpotData(result[0]);
      console.log(spotData);

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
    if (spotData.images) {
      const gallery = spotData.images.map((img) => {
        return <img key={img} src={`${img}`} alt={`${spotData.name} image`} />;
      });
      return gallery;
    }
  };

  const renderAmenities = () => {
    if (spotData.amenities) {
      const amenitiesList = spotData.amenities.map((amenity) => {
        return <li key={amenity}>{amenity}</li>;
      });
      return amenitiesList;
    }
  };

  const renderMap = (src) => {
    return <iframe src={src} allowfullscreen="" loading="lazy"></iframe>;
  };

  const renderReviews = () => {
    // this review logic will be more complex in the future since every review will have a user and that's something that its not ready yet because we have no users
    if (spotData.reviews.length > 0) {
      return spotData.reviews.map((review) => {
        <p>{review}</p>;
      });
    }
    return <p>This spot has no reviews yet</p>;
  };

  return (
    (!loading && (
      <Layout
        spotName={spotData.name}
        shouldShowForm={shouldShowForm}
        setShouldShowForm={setShouldShowForm}
      >
        <div
          className={classnames(styles.formOverlay, {
            [styles.open]: shouldShowForm,
          })}
        >
          <button
            onClick={() => {
              setShouldShowForm(!shouldShowForm);
            }}
          >
            Close
          </button>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdd7-87U1DYtqZ5MpIgyFx002T7-oifsXazpYXQjRBVlWHXNA/viewform?embedded=true"
            width="640"
            height="738"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div className={styles.spotInfo}>
          <section className={styles.gallerySection}>
            <h3>Gallery</h3>
            {renderGallery()}
          </section>
          <section className={styles.amenitiesSection}>
            <h3>Amenities</h3>
            <ul>{renderAmenities()}</ul>
            <div className={styles.lineDivision}></div>
          </section>
          <section className={styles.descriptionSection}>
            <h3>Description</h3>
            <p>{spotData.description}</p>
            <div className={styles.lineDivision}></div>
          </section>
          <section className={styles.locationSection}>
            <h3>Location</h3>
            <div className={styles.mapWrapper}>
              {renderMap(spotData.embeddedMapSource)}
            </div>
          </section>
          <section className={styles.reviews}>
            <h3>Reviews</h3>
            {renderReviews()}
            <div className={styles.lineDivision}></div>
          </section>
        </div>
        <div className={styles.bookBtnBottomWrapper}>
          <button
            className={styles.bookBtn}
            onClick={() => {
              setShouldShowForm(!shouldShowForm); // esto cambiara
            }}
          >
            Book
          </button>
        </div>
      </Layout>
    )) || <Loading />
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
