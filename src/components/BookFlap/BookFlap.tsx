import { useState } from "react";

import { ProfileType } from "../../assets/profilesList";
import styles from "./BookFlap.module.css";

export default function BookFlap({
  occupation,
  text,
  thumbnail,
  startDate,
  endDate,
  note,
  flapZ,
  coverZ,
  left,
  isClicked,
  onClick,
}: ProfileType & {
  flapZ: number;
  coverZ: number;
  left: number;
  isClicked: boolean;
  onClick: () => void;
}) {
  // const [isClicked, setIsClicked] = useState(false);

  // const handleFlapClick = () => {
  //   setIsClicked((prev) => !prev);
  // };

  return (
    <div
      className={isClicked ? styles.clickedFlap : styles.flap}
      style={{ zIndex: flapZ, left: left }}
      onClick={onClick}
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
          까지 잠정적인 소개로 작동 중...
        </div>
      </section>
    </div>
  );
}
