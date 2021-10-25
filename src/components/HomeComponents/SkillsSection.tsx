import { ProgressBar } from "../ProgressBar";
import styles from "./SkillsSection.module.scss";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { skills } from "../../utils/constants";

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
    triggerOnce: true,
  });
  return (
    <div className={styles["skills-section"]}>
      <h2>Skills</h2>
      <div className={styles["skills-content-container"]} ref={ref}>
        {skills.map(({ name, Icon, color, progress }) => (
          <div className={styles["skills-flex-item"]}>
            <div style={{ textAlign: "center", minWidth: "100px" }}>
              <Icon size={50} color={color} />
              <p>{name}</p>
            </div>
            <ProgressBar progress={progress} color={color} animate={inView} />
          </div>
        ))}
      </div>
    </div>
  );
};
