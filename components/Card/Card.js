import Link from "next/link";
import styles from "../../styles/Card.module.scss";

const Card = ({ spot }) => {
  const renderKeywords = (spot) => {
    const keywords = spot.keywords.split(",");
    if (keywords) {
      return keywords.map((keyword) => {
        return (
          <span key={keyword} className={styles.keywordChip}>
            {keyword}
          </span>
        );
      });
    }
  };

  return (
    <Link href={`/${spot.id}`}>
      <div key={spot.name} className={styles.card}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: "url(" + spot.img + ")" }}
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
