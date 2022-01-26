import React from "react";
import clothes from "../../img/clothes.png";
import close from "../../img/close.png";
// import image from "../../img/Image.png";
// import camera from "../../img/camera.png";
import SingleItem from "../SingleItem";
import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h6 className={styles.title}>Similar to this</h6>
        <div className={styles.img}>
          <img src={clothes} alt="clothes" className={styles.innerImage} />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.chooseButton}>Choose image</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.innerContainer}>
          <div className={styles.bothWrap}>
            <div className={styles.closeWrap}>
              <img src={close} alt="close" className={styles.close} />
            </div>
            <p className={styles.text}>Total Items: 60</p>
          </div>
          <div className={styles.imgSection}>
            {Array.from(Array(40).keys()).map((i) => (
              <SingleItem key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
