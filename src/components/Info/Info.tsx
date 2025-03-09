import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.infoSection}>
        <h1>교육</h1>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2025.02</p>
            </div>
          </div>
          <div className={styles.infoItemContent}>
            <p>서울대학교 졸업 (언론정보학, 미학, 정보문화학)</p>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <h1>경력</h1>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2021.12</p>
            </div>
            <div>-</div>
            <div className={styles.infoItemDateEnd}>
              <p>2022.06</p>
            </div>
          </div>
          <div className={styles.infoItemContent}>
            <p>네이버 시리즈온 인턴 (플랫폼 기획, 운영)</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2024.12</p>
            </div>
            <div>-</div>
          </div>
          <div className={styles.infoItemContent}>
            <p>민구홍 매뉴팩처링 인턴</p>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <h1>활동</h1>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2018.09</p>
            </div>
            <div>-</div>
            <div className={styles.infoItemDateEnd}>
              <p>2020.02</p>
            </div>
          </div>
          <div className={styles.infoItemContent}>
            <p>청년단체 통감 (학술팀)</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2022.09</p>
            </div>
            <div>-</div>
            <div className={styles.infoItemDateEnd}>
              <p>2023.08</p>
            </div>
          </div>
          <div className={styles.infoItemContent}>
            <p>영화 제작 동아리 이미지밴드 (연출팀, 촬영팀)</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2023.09</p>
            </div>
            <div>-</div>
            <div className={styles.infoItemDateEnd}>
              <p>2024.12</p>
            </div>
          </div>
          <div className={styles.infoItemContent}>
            <p>인터랙티브 영상 플랫폼 Xction (기획팀, 개발팀)</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoItemDate}>
            <div className={styles.infoItemDateStart}>
              <p>2023.09</p>
            </div>
            <div>-</div>
            <div className={styles.infoItemDateEnd}>
              <p>2025.02</p>
            </div>
          </div>
          <div className={styles.infoItemContent}>
            <p>웹 개발 동아리 와플스튜디오 (프론트엔드)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
