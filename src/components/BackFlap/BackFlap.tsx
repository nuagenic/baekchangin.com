import { useState } from "react";

import { ProfileType } from "../../assets/profilesList";
import styles from "./BackFlap.module.css";

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
  //   const [isClicked, setIsClicked] = useState(false);

  //   const handleFlapClick = () => {
  //     setIsClicked((prev) => !prev);
  //   };

  return (
    <div
      className={isClicked ? styles.clickedBackFlap : styles.backFlap}
      onClick={onClick}
      style={{ zIndex: flapZ, left: left }}
    >
      <div className={styles.note}>{note}</div>
    </div>
  );
}
