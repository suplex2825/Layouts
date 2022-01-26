import React, { useState } from "react";

import Fashion from "../../img/fashion.png";
import Fashion2 from "../../img/fashion2.png";
import Fashion3 from "../../img/fashion3.png";
import Cancel from "../../img/cancel.png";

import styles from "./index.module.css";
import CommonStructure from "../../pages/CommonStructure";
import SingleImage from "../SingleImage";

const Index = () => {
  const [img, setImg] = useState(undefined);
  const imgClick = (e) => {
    setImg(e.target.src);
  };

  const removeClick = () => {
    setImg(undefined);
  };

  const ImageComponents = () => {
    return (
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
        <div className={styles.singleItem}>
          <img
            src={Fashion2}
            alt="fashion"
            className={styles.responsiveImg}
            onClick={imgClick}
          />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
        <div className={styles.singleItem}>
          <img
            src={Fashion3}
            alt="fashion"
            className={styles.responsiveImg}
            onClick={imgClick}
          />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
      </div>
    );
  };

  return (
    <CommonStructure
      ImageComponents={ImageComponents}
      img={img}
      removeClick={removeClick}
    />
  );
};

export default Index;
