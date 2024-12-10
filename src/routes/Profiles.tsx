import styles from "../styles/Profiles.module.css";
import { profilesList } from "../assets/profilesList";
import BookFlap from "../components/BookFlap/BookFlap";

export default function Profiles() {
  return (
    <div className={styles.container}>
      {profilesList.map((profile) => (
        <BookFlap key={profile.startDate} {...profile} />
      ))}
    </div>
  );
}
