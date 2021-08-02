import Link from "next/link";
import styles from "../../styles/Card.module.scss";

const Card = ({ spot }) => {
  const renderKeywords = () => {
    if (spot?.keywords) {
      return spot.keywords.split(",").map((keyword) => {
        return (
          <span key={`${keyword + spot.id}`} className={styles.keywordChip}>
            {keyword.trim()}
          </span>
        );
      });
    }
  };

  return (
    <Link href={`/DetailPage/${spot.id}`}>
      <div key={spot.name} className={styles.card}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: "url(" + spot.images[0] + ")" }}
        ></div>
        <div className={styles.infoWrapper}>
          <h3>{spot.name}</h3>
          <div className={styles.keywordsWrapper}>{renderKeywords(spot)}</div>
          <span className={styles.priceFrom}>
            <span>from </span>
            {spot.priceFrom}€
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
