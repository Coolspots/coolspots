import React from "react";
import styles from "../../styles/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
