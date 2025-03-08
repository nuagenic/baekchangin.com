import { Link } from "react-router-dom";
import styles from "../styles/Root.module.css";
import { WorkItem, worksList } from "../assets/worksList";
import { useState } from "react";
import Work from "../components/Work/Work";

export default function Root() {
  const sortedWorksListByYear = worksList.sort((a, b) => b.year - a.year);
  const [showWorks, setShowWorks] = useState(false);
  const [showWork, setShowWork] = useState(
    Array(sortedWorksListByYear.length).fill(false)
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.toggle}>백창인</span>
        <span>은 </span>
        <span
          className={styles.toggle}
          onClick={() => setShowWorks((prev) => !prev)}
        >
          언어
        </span>
        <span>
          를 배열하고 충돌시킨다. 언어의 규칙을 준수하는 동시에 자연스럽게
          발생하는 위반의 가능성을 탐구한다.
        </span>
      </div>

      {showWorks &&
        sortedWorksListByYear.map((work: WorkItem, i, a) => (
          <div className={styles.work} key={work.title}>
            <div className={styles.workBrief}>
              <div
                className={styles.workTitle}
                onClick={() =>
                  setShowWork((prev) => {
                    const next = [...prev];
                    next[i] = !next[i];
                    return next;
                  })
                }
              >
                <div>{work.title}</div>
              </div>
              <div className={styles.workYear}>
                <div>{work.year}</div>
              </div>
              <div className={styles.workType}>
                <div>{work.type}</div>
              </div>
            </div>
            {showWork[i] && <Work work={work} />}
          </div>
        ))}
    </div>
  );
}
