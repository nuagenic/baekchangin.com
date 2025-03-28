import { useState, useEffect } from "react";
import styles from "../styles/Minguhongmfg.module.css";

export default function Minguhongmfg() {
  const [scrolled, setScrolled] = useState(false);
  const [footerContent, setFooterContent] = useState(
    <>괜찮습니다. 잠시만 기다려주세요.</>
  );

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setFooterContent(
        <>
          © 2015 – 2025 (
          <a
            className={styles.link}
            href="https://baekchangin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            백창인
          </a>
          이 인턴으로 일한) 민구홍 매뉴팩처링
        </>
      );
    }, 1500);

    // const scrollTimer = setTimeout(() => {
    //   window.scrollTo({
    //     top: window.innerHeight,
    //     behavior: "smooth",
    //   });
    // }, 2000);
    const scrollTimer = setTimeout(() => {
      const startY = window.scrollY;
      const targetY = window.innerHeight;
      const duration = 400; // Total scroll duration in milliseconds
      let startTime: number | null = null;

      function stepScroll(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        window.scrollTo(0, startY + (targetY - startY) * Math.min(progress, 1));

        if (progress < 1) {
          requestAnimationFrame(stepScroll);
        }
      }

      requestAnimationFrame(stepScroll);
    }, 2000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <footer className={`${styles.footer} ${scrolled ? styles.shrink : ""}`}>
          <div className={styles.content}>{footerContent}</div>
        </footer>
        <main className={styles.polaroidContainer}>
          <div className={styles.polaroid}>
            <img
              className={styles.photo}
              src="/images/minguhongmfg.jpg"
              alt="minguhongmfg"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="여기에서 우리는 무엇이든 써낼 수 있습니다."
            />
          </div>
        </main>
      </div>
    </>
  );
}
