import { useState } from "react";
import styles from "../styles/Annals.module.css";
import { annalList } from "../assets/annalList";

export default function Chronicle() {
  const [visibleImages, setVisibleImages] = useState([]);

  // 단어 클릭 시 이미지 띄우는 경우
  const handleWordToImage = (word: string, imageSrc: string) => {
    if (!imageSrc) return; // 이미지가 없는 경우 동작하지 않음

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const randomX = scrollX + Math.random() * (viewportWidth - 200);
    const randomY = scrollY + Math.random() * (viewportHeight - 200);

    setVisibleImages((prev) => [
      ...prev,
      { id: Date.now(), word, src: imageSrc, x: randomX, y: randomY },
    ]);
  };

  const handleImageClick = (id: number) => {
    setVisibleImages((prev) => prev.filter((image) => image.id !== id));
  };

  return (
    <div className={styles.container}>
      <main className={styles.artboard}>
        <div className={styles.title}>어딘가 수상한 백창인 연보</div>
        <div className={styles.body}>
          {annalList.map((section) => (
            <section key={section.year}>
              <div>{section.year}</div>
              <ul>
                {section.sentences.map((sentence, index: number) => {
                  const words = sentence.text.split(
                    new RegExp(
                      `(${sentence.clickableWords
                        ?.map((w) => w.word)
                        .join("|")})`,
                      "g"
                    )
                  );

                  return (
                    <li key={index}>
                      {words.map((word, i) => {
                        const clickableWord = sentence.clickableWords?.find(
                          (w) => w.word === word
                        );

                        if (clickableWord && clickableWord.image) {
                          return (
                            <span
                              key={i}
                              className={styles.clickableWord}
                              onClick={() =>
                                handleWordToImage(
                                  clickableWord.word,
                                  clickableWord.image
                                )
                              }
                            >
                              {clickableWord.word}
                            </span>
                          );
                        }

                        if (clickableWord && clickableWord.link) {
                          return (
                            <span
                              key={i}
                              className={styles.clickableWord}
                              onClick={() => {
                                const screenWidth = window.innerWidth;
                                const screenHeight = window.innerHeight;

                                const popupWidth = 500;
                                const popupHeight =
                                  clickableWord.word === "flipsandturns"
                                    ? 800
                                    : 300;

                                // 랜덤 위치 계산 (스크롤 위치를 기준으로)
                                const randomLeft =
                                  Math.random() * (screenWidth - popupWidth);
                                const randomTop =
                                  Math.random() * (screenHeight - popupHeight);

                                console.log(randomLeft, randomTop);

                                window.open(
                                  clickableWord.link,
                                  "_blank",
                                  `width=${popupWidth},height=${popupHeight},top=${randomTop},left=${randomLeft},toolbar=no,menubar=no,location=no,directories=no,status=no`
                                );
                              }}
                            >
                              {clickableWord.word}
                            </span>
                          );
                        }

                        return <span key={i}>{word}</span>;
                      })}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {visibleImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.word}
            className={styles.randomImage}
            style={{
              position: "absolute",
              top: `${image.y}px`,
              left: `${image.x}px`,
              width: "200px",
              height: "auto",
            }}
            onClick={() => handleImageClick(image.id)}
          />
        ))}

        <footer className={styles.footer}>
          <br />
          <div>연</div>
          <div>보</div>
          <div>는</div>
          <div>계</div>
          <div>속</div>
          <div>된</div>
          <div>다</div>
          <ul style={{ margin: 0 }}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
