import styles from "../styles/HomeSection.module.css";
import image from "../../assets/images.jpeg";
import rebajas from "../../assets/rebajas.jpg";

export default function HomeSection() {
  return (
    <section className={styles.content}>
      <div className={styles.contentBox1}>
        <img alt="Principal" src={image} className={styles.content1} />
      </div>
      <div className={styles.contentBox2}>
        <img alt="Secundaria 1" src={image} className={`${styles.content2} ${styles.tall}`} />
        <img alt="Secundaria 2" src={image} className={`${styles.content3} ${styles.Nottall}`} />
      </div>
      <div className={styles.contentBox3}>
        <img alt="Secundaria 3" src={image} className={`${styles.content2} ${styles.Nottall} ${styles.nopad}`} />
        <div className={`${styles.content3} ${styles.tall} ${styles.div}`}></div>
      </div>
    </section>
    // <div>HomeSection</div>
  );
}
