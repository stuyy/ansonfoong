import styles from "./HomeSection.module.scss";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

export const HomeSection = () => {
  return (
    <div className={styles.homesection}>
      <section className={styles["home-side-section"]}>
        <div className={styles.maintitle}>
          <h2>Leveling programmers up with quality tutorials</h2>
        </div>
        <div className={styles.learnmore}>
          <p>Learn More About Me</p>
          <BsArrowDownCircle size={32} />
        </div>
      </section>
      <section className={styles["buttons-container"]}>
        <div className={`${styles.button} ${styles["button-github"]}`}>
          <VscGithub size={45} />
          <h3>GitHub</h3>
        </div>
        <div className={`${styles.button} ${styles["button-linkedin"]}`}>
          <FaLinkedin size={45} />
          <h3>LinkedIn</h3>
        </div>
      </section>
    </div>
  );
};
