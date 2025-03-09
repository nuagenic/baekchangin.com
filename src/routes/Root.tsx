import { Link } from "react-router-dom";
import styles from "../styles/Root.module.css";
import { WorkItem, worksList } from "../assets/worksList";
import { useState } from "react";
import Work from "../components/Work/Work";
import Info from "../components/Info/Info";

export default function Root() {
  const sortedWorksListByYear = worksList.sort((a, b) => b.year - a.year);
  const [showWorks, setShowWorks] = useState(true);
  const [showWork, setShowWork] = useState(
    Array(sortedWorksListByYear.length).fill(false)
  );
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.infoBrief}>
          <p className={styles.infoBriefName}>백창인</p>
          <p>1999.07.30</p>
          <p>
            <a href="mailto:nuagenic@gmail.com">nuagenic@gmail.com</a>
          </p>
        </div>
        <div className={styles.infoDetail}>
          <p>
            서울대학교에서 언론정보학, 미학, 정보문화학을 공부했다. 2021년
            12월부터 2022년 6월까지 네이버 시리즈온 인턴으로 플랫폼 기획과
            운영에 참여했고, 2024년 12월부터{" "}
            <a
              target="_blank"
              href="https://minguhongmfg.com/"
              rel="noreferrer"
            >
              민구홍 매뉴팩처링
            </a>{" "}
            인턴으로 일한다. 2020년 12월에 시집 『구름의 변증법』을 써냈고,
            2023년 6월에 영화 「
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=7c8bFhaFNho"
              rel="noreferrer"
            >
              THE MOVERS
            </a>
            」를 연출했다. 2018년 9월부터 2020년 2월까지 비영리단체 통감에서
            학술적 글쓰기를 지원했으며, 2022년 9월부터 2023년 8월까지
            이미지밴드에서 연출 및 촬영팀으로 다수 영화에 참여했다. 2023년
            9월부터 2025년 2월까지 와플스튜디오에서 프론트엔드 개발자로
            활동했으며, 그 사이에{" "}
            <a
              target="_blank"
              href="https://flipsandturns.xyz/"
              rel="noreferrer"
            >
              flipsandturns
            </a>
            와 같은 웹을 작업하기도 했다. 한편, 처음부터 끝까지 백창인은 언어를
            배열하고 충돌시킨다. 언어의 규칙을 준수하는 동시에 자연스럽게
            발생하는 위반의 가능성을 탐구한다.
          </p>
        </div>
      </div>
      {/* <div className={styles.header}>
        <span
          className={styles.toggle}
          onClick={() => setShowInfo((prev) => !prev)}
        >
          백창인
        </span>
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
      </div> */}

      {showInfo && <Info />}
      <div className={styles.works}>
        {sortedWorksListByYear.map((work: WorkItem, i, a) => (
          <div className={styles.work} key={work.title}>
            <div
              className={styles.workBrief}
              style={{
                borderBottom: showWork[i] ? "0" : "1px dotted white",
              }}
              onClick={() =>
                setShowWork((prev) => {
                  const next = [...prev];
                  next[i] = !next[i];
                  return next;
                })
              }
            >
              <div className={styles.workTitle}>
                <div>{work.title}</div>
              </div>
              <div className={styles.workTypeAndYear}>
                <div className={styles.workType}>
                  <div>{work.type}</div>
                </div>
                <div className={styles.workYear}>
                  <div>{work.year}</div>
                </div>
              </div>
            </div>
            {showWork[i] && <Work work={work} />}
          </div>
        ))}
      </div>
    </div>
  );
}
