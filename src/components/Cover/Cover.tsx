import styles from "./Cover.module.css";

export default function Cover({
  coverZ,
  left,
}: {
  coverZ: number;
  left: number;
}) {
  return (
    <div className={styles.cover} style={{ zIndex: coverZ, left: left }}></div>
  );
}
