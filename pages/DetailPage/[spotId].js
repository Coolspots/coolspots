import classnames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import styles from './DetailPage.module.scss';
import { useAuth } from '../../contexts/AuthContext';

const Spot = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [spotData, setSpotData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldShowForm, setShouldShowForm] = useState(false);
  const { spotId } = router.query;

  const getSpot = async () => {
    const res = await fetch(`../api/spots/${spotId}`);
    const { spot } = await res.json();

    setSpotData(spot.fields);
    setLoading(false);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getSpot();
  }, [router.isReady]);

  const renderGallery = () => {
    // TODO add more photos in airtable
    // render only one photo for now
    if (spotData.imgLink) {
      return <img src={`${spotData.imgLink}`} alt={`${spotData.name} image`} />;
    }
    if (spotData.images) {
      const gallery = spotData.images.map((img) => {
        return <img key={img} src={`${img}`} alt={`${spotData.name} image`} />;
      });
      return gallery;
    }
  };

  const renderAmenities = () => {
    if (spotData.tags) {
      const tagList = spotData.tags.map((tag) => {
        return <li key={tag}>{tag}</li>;
      });
      return tagList;
    }
  };

  const renderMap = (src) => {
    return <iframe src={src} loading="lazy"></iframe>;
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

  const bookSpot = () => {
    return currentUser ? setShouldShowForm(!shouldShowForm) : router.push('/auth');
  };

  if (loading) {
    return <Loading />;
  }

  if (!spotData || !Object.keys(spotData).length) {
    return <div>"Couldn't load spot... :("</div>;
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
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              frameborder: '0',
              width: '100%',
              height: '100%',
            }}
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
            <div className={styles.mapWrapper}>{renderMap(spotData.mapsLink)}</div>
          </section>
          <section className={styles.reviews}>
            <h3>Reviews</h3>
            {renderReviews()}
            <div className={styles.lineDivision}></div>
          </section>
        </div>
        <div className={styles.bookBtnBottomWrapper}>
          <button className={styles.bookBtn} onClick={() => bookSpot()}>
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
