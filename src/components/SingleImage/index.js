import React from "react";
import Cancel from "../../img/cancel.png";
import styles from "./index.module.css";

const SingleImage = ({ img, imgClick }) => {
  return (
    <div className={styles.singleItem}>
      <img
        src={img}
        alt="fashion"
        className={styles.responsiveImg}
        onClick={imgClick}
      />
      <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
    </div>
  );
};

export default SingleImage;
