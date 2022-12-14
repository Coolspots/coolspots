import Link from "next/link";
import styles from "./Card.module.scss";

const Card = ({ spot = {} }) => {
  if (!Object.keys(spot).length) {
    return;
  }

  const renderTags = () => {
    if (spot.fields.tags) {
      return spot.fields.tags.map((tag) => {
        return (
          <span key={`${tag + spot.id}`} className={styles.tagChip}>
            {`${tag.toLowerCase().trim()}`}
          </span>
        );
      });
    }
  };

  return (
    <Link href={`/DetailPage/${spot.id}`}>
      <div key={spot.fields.name} className={styles.card}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: "url(" + spot.fields?.images[0] + ")" }}
        ></div>
        <div className={styles.infoWrapper}>
          <h3>{spot.fields.name}</h3>
          <div className={styles.tagsWrapper}>{renderTags(spot)}</div>
          <span className={styles.priceFrom}>
            <span>from </span>
            {spot.fields.priceFrom}€
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
