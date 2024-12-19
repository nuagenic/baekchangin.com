import { useState, useEffect } from "react";

import styles from "../styles/Profiles.module.css";
import { profilesList } from "../assets/profilesList";
import BookFlap from "../components/BookFlap/BookFlap";
import BackFlap from "../components/BackFlap/BackFlap";
import Cover from "../components/Cover/Cover";

export default function Profiles() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isClickedArray, setIsClickedArray] = useState(
    Array(profilesList.length).fill(false)
  );

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleFlapClick = (index: number) => {
    setIsClickedArray((prev) =>
      prev.map((clicked, i) => (i === index ? !clicked : clicked))
    );
  };

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const handleFlapClick1 = () => {
    setIsClicked1((prev) => !prev);
  };
  const handleFlapClick2 = () => {
    setIsClicked2((prev) => !prev);
  };
  const handleFlapClick3 = () => {
    setIsClicked3((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {profilesList.map((profile, index, list) => {
        // 인덱스에 따른 z-index 설정
        const flapZ = list.length + index + 1;
        const backFlapZ = list.length - index;
        const coverZ = list.length - index;

        // 인덱스에 따른 left 값 설정
        const baseLeft = viewportWidth - 500; // 500은 cover width
        const bookFlapLeft = baseLeft - index * 35;
        const backFlapLeft = baseLeft - 400 - index * 35; // 400은 flap width
        const coverLeft = baseLeft - index * 35;

        return (
          <>
            <BookFlap
              // key={profile.startDate}
              {...profile}
              flapZ={flapZ}
              coverZ={coverZ}
              left={bookFlapLeft}
              isClicked={isClickedArray[index]}
              onClick={() => handleFlapClick(index)}
            />
            <BackFlap
              // key={profile.startDate}
              {...profile}
              flapZ={backFlapZ}
              coverZ={coverZ}
              left={backFlapLeft}
              isClicked={isClickedArray[index]}
              onClick={() => handleFlapClick(index)}
            />
            <Cover coverZ={coverZ} left={coverLeft} />
          </>
        );
      })}
    </div>
  );
}
