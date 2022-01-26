import React, { useState } from "react";
import Upload from "../../img/Upload.png";
import Close from "../../img/close2.png";
import Fashion from "../../img/fashion.png";
import Fashion2 from "../../img/fashion2.png";
import Fashion3 from "../../img/fashion3.png";
import Fashion4 from "../../img/fashion4.png";
import Fashion5 from "../../img/fashion5.png";
import Fashion6 from "../../img/fashion6.png";
import Cancel from "../../img/cancel.png";
import CommonStructure from "../../pages/CommonStructure";
import styles from "./index.module.css";

const Upload3 = () => {
  const [img, setImg] = useState(undefined);
  const imgClick = (e) => {
    setImg(e.target.src);
  };
  // Make something very big

  // others

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
        <div className={styles.singleItem}>
          <img
            src={Fashion4}
            alt="fashion"
            className={styles.responsiveImg}
            onClick={imgClick}
          />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
        <div className={styles.singleItem}>
          <img
            src={Fashion5}
            alt="fashion"
            className={styles.responsiveImg}
            onClick={imgClick}
          />
          <img src={Cancel} alt="Cancel" className={styles.cancelImg} />
        </div>
        <div className={styles.singleItem}>
          <img
            src={Fashion6}
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

export default Upload3;
