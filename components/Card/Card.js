import styles from "../../styles/Card.module.scss";

const Card = ({ spot }) => {
  const renderKeywords = (spot) => {
    const keywords = spot.keywords.split(",");
    if (keywords) {
      return keywords.map((keyword) => {
        return <span key={keyword}>{keyword}</span>;
      });
    }
  };

  return (
    <div key={spot.name} className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: "url(" + spot.img + ")" }}
      ></div>
      <div className={styles.infoWrapper}>
        <h3>{spot.name}</h3>
        <div className={styles.keywordsWrapper}>{renderKeywords(spot)}</div>
        <p>from {spot.priceFrom}€</p>
      </div>
    </div>
  );
};

export default Card;
