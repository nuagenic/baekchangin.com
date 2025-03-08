import { WorkItem } from "../../assets/worksList";
import styles from "./Work.module.css";

export default function Work({ work }: { work: WorkItem }) {
  return (
    <div className={styles.workDetail}>
      <div className={styles.workDescription}>{work.description}</div>
      {work.link && (
        <a href={work.link} target="_blank" rel="noreferrer">
          <div className={styles.workLink}>{work.link}</div>
        </a>
      )}
      <div className={styles.workImages}>
        {work.images &&
          work.images.map((image) => (
            <img
              key={image}
              src={image}
              alt={work.title}
              className={styles.workImage}
            />
          ))}
      </div>
    </div>
  );
}
