import { WorkItem } from "../../assets/worksList";
import styles from "./Work.module.css";

export default function Work({ work }: { work: WorkItem }) {
  return (
    <div className={styles.container}>
      <div className={styles.workLeft}>
        <div className={styles.workDescription}>
          {work.description.map((paragraph) => (
            <p key={paragraph} className={styles.workParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
        {work.link && (
          <div className={styles.workLink}>
            <a href={work.link} target="_blank" rel="noreferrer">
              {work.link}
            </a>
          </div>
        )}
      </div>
      <div className={styles.workRight}>
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
    </div>
  );
}
