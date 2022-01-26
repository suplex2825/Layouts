import React from "react";

import Fashion from "../../img/fashion.png";
import Fashion2 from "../../img/fashion2.png";
import Fashion3 from "../../img/fashion3.png";
import Cancel from "../../img/cancel.png";

import styles from "./index.module.css";
import CommonStructure from "../../pages/CommonStructure";

const index = () => {
  const ImageComponents = () => {
    return (
      <div className={styles.galleryWrap}>
        <div className={styles.singleItem}>
          <img src={Fashion} alt="fashion" className={styles.responsiveImg} />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
        <div className={styles.singleItem}>
          <img src={Fashion2} alt="fashion" className={styles.responsiveImg} />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
        <div className={styles.singleItem}>
          <img src={Fashion3} alt="fashion" className={styles.responsiveImg} />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
      </div>
    );
  };

  return <CommonStructure ImageComponents={ImageComponents} />;
};

export default index;
