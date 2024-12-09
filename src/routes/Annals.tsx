import styles from "../styles/Annals.module.css";

import Conjunction from "../components/Conjunction/Conjunction";
import { annalList } from "../assets/annalList";

export default function Annals() {
  return (
    <div className={styles.container}>
      <main className={styles.artboard}>
        <div className={styles.title}>
          작가 연보
          <sup>[그런데]</sup>
        </div>
        <div className={styles.body}>
          {annalList.map((section) => {
            return (
              <section>
                <div>{section.year}</div>
                <ul>
                  {section.items.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
