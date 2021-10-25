import { ProgressBar } from "../ProgressBar";
import styles from "./SkillsSection.module.scss";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";

export const SkillsSection = () => {
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
          <ProgressBar progress={90} color="#f89820" spacing="50px" />
        </div>
        <div className={styles["skills-flex-item"]}>
          <div style={{ textAlign: "center" }}>
            <span>
              <FaNodeJs size={50} color="#3c873a" />
            </span>
            <p>NodeJS</p>
          </div>
          <ProgressBar progress={0} color="#3c873a" spacing="50px" />
        </div>
      </div>
    </div>
  );
};
