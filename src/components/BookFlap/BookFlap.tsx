import { useState, useRef, useEffect } from "react";

import { ProfileType } from "../../assets/profilesList";
import styles from "./BookFlap.module.css";

export default function BookFlap({
  occupation,
  text,
  thumbnail,
  startDate,
  endDate,
}: ProfileType) {
  const [isClicked, setIsClicked] = useState(false);

  const handleFlapClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div
        className={isClicked ? styles.clickedFlap : styles.flap}
        onClick={handleFlapClick}
      >
        <section className={styles.section}>
          <div className={styles.name}>
            {occupation}
            {"  "}백창인
          </div>
          <img className={styles.image} src={thumbnail} alt="profile-image" />
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div className={styles.date}>
            {startDate}-{endDate === "지금" ? "지금" : endDate}
            까지 작동 중
          </div>
        </section>
      </div>
      <div
        className={isClicked ? styles.clickedBackFlap : styles.backFlap}
        onClick={handleFlapClick}
      ></div>
      <div className={styles.cover}></div>
    </div>
  );
}