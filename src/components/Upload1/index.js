import React, { useState } from "react";
import Upload from "../../img/Upload.png";
import Close from "../../img/close2.png";
import Fashion from "../../img/fashion.png";
import Cancel from "../../img/cancel.png";
import RightPanel from "./RightPanel";
import CommonStructure from "../../pages/CommonStructure";
import styles from "./index.module.css";

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
      </div>
    );
  };

  return <CommonStructure ImageComponents={ImageComponents} />;
  return (
    <div className={styles.upload1Container}>
      <div className={styles.leftPanel}>
        <h5 className={styles.upload1Title}>Try Visual Search</h5>
        <p className={styles.upload1Sub}>
          Search and discover similar items by uploading or taking a photo.
        </p>
        <div className={styles.uploadImg}>
          {img === undefined ? (
            <>
              <div className={styles.imgWrapper}>
                <img src={Upload} alt="upload" className={styles.img} />
              </div>
              <p className={styles.uploadTitle} style={{ marginBottom: "0" }}>
                Drop your image here or
              </p>
              <a className={styles.uploadLink} href="/#">
                browse
              </a>
            </>
          ) : (
            <img
              src={img}
              alt="fashion"
              className={styles.imgClass}
              onClick={removeClick}
            />
          )}
        </div>
      </div>

      <RightPanel imgClick={imgClick} />
    </div>
  );
};

export default Index;
