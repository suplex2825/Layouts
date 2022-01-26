import styles from "./index.module.css";
import Upload from "../../img/Upload.png";
import Close from "../../img/close2.png";

const CommonStructure = ({ ImageComponents }) => {
  return (
    <div className={styles.upload1Container}>
      <div className={styles.leftPanel}>
        <h5 className={styles.upload1Title}>Try Visual Search</h5>
        <p className={styles.upload1Sub}>
          Search and discover similar items by uploading or taking a photo.
        </p>
        <div className={styles.uploadImg}>
          <div className={styles.imgWrapper}>
            <img src={Upload} alt="upload" className={styles.img} />
          </div>
          <p className={styles.uploadTitle} style={{ marginBottom: "0" }}>
            Drop your image here or
          </p>
          <a className={styles.uploadLink} href="/#">
            browse
          </a>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.closeWrap}>
          <img src={Close} alt="close" className={styles.closeIcon} />
        </div>
        <p className={styles.rightTitle} style={{ marginBottom: "0" }}>
          Don't have a photo?
        </p>
        <p className={styles.rightTitle}>Choose one from the gallery below.</p>
        <ImageComponents />
      </div>
    </div>
  );
};

export default CommonStructure;
