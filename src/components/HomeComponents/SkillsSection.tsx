import { ProgressBar } from "../ProgressBar";
import styles from "./SkillsSection.module.scss";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });
  return (
    <div className={styles["skills-section"]}>
      <h2>Skills</h2>
      <div className={styles["skills-content-container"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span>
              <FaJava size={50} color="#f89820" />
            </span>
            <p>Java</p>
          </div>
          <ProgressBar
            progress={90}
            color="#f89820"
            spacing="50px"
            animate={inView}
          />
        </div>
        <div className={styles["skills-flex-item"]} ref={ref}>
          <div style={{ textAlign: "center" }}>
            <span>
              <FaNodeJs size={50} color="#3c873a" />
            </span>
            <p>NodeJS</p>
          </div>
          <ProgressBar
            progress={80}
            color="#3c873a"
            spacing="50px"
            animate={inView}
          />
        </div>
      </div>
    </div>
  );
};
