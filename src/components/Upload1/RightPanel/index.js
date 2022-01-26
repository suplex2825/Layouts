import React from "react";
import Close from "../../../img/close2.png";
import Fashion from "../../../img/fashion.png";
import Cancel from "../../../img/cancel.png";
import styles from "./index.module.css";

const index = ({ imgClick }) => {
  return (
    <div className={styles.rightPanel}>
      <div className={styles.closeWrap}>
        <img src={Close} alt="close" className={styles.closeIcon} />
      </div>
      <p className={styles.rightTitle} style={{ marginBottom: "0" }}>
        Don't have a photo?
      </p>
      <p className={styles.rightTitle}>Choose one from the gallery below.</p>
      <div className={styles.galleryWrap}>
        <div className={styles.singleItem}>
          <img
            src={Fashion}
            alt="fashion"
            className={styles.responsiveImg}
            onClick={imgClick}
          />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
      </div>
    </div>
  );
};

export default index;
