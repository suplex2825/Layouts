import React from "react";
import image from "../../img/Image.png";
import camera from "../../img/camera.png";
import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.singleImg}>
      <div className={styles.imgPart}>
        <img src={image} alt="image" className={styles.innerImage} />
        <img src={camera} alt="camera" className={styles.cameraIcon} />
      </div>
      <p className={styles.productName}>Product Name</p>
      <p className={styles.dollar}>$124</p>
    </div>
  );
};

export default index;
