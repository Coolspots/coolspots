import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import styles from "./DetailPage.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

const Spot = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [spotData, setSpotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldShowForm, setShouldShowForm] = useState(false);
  const { spotId } = router.query;
  const canEdit = currentUser?.uid === spotData?.author;
  console.log("canEdit", canEdit);
  console.log("currentUser.uid :>> ", currentUser.uid);
  console.log("spotData.author :>> ", spotData.author);
  useEffect(() => {
    if (!router.isReady) return;
    const docRef = db.collection("spots").doc(spotId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setSpotData(doc.data());
          setLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
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
    if (spotData.reviews?.length > 0) {
      return spotData.reviews.map((review) => {
        <p>{review}</p>;
      });
    }
    return <p>This spot has no reviews yet</p>;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.detailPage}>
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
            className={styles.closeFormBtn}
            onClick={() => {
              setShouldShowForm((prevState) => !prevState);
            }}
          >
            Close
          </button>
          <iframe
            className="airtable-embed airtable"
            src="https://airtable.com/embed/shr95YVBnPuPPKbRB?backgroundColor=blue"
            onmousewheel=""
            style={{
              background: "transparent",
              border: "1px solid #ccc",
              frameborder: "0",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        {canEdit && <button className="mainBtn">Edit</button>}
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
              currentUser
                ? setShouldShowForm(!shouldShowForm)
                : router.push("/auth");
            }}
          >
            Book
          </button>
        </div>
      </Layout>
    </div>
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
