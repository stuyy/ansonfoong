import styles from "./ProgressBar.module.scss";

export type ProgressBarProps = {
  color: string;
  progress: number;
  animate: boolean;
};

export const ProgressBar = ({ color, progress, animate }: ProgressBarProps) => (
  <div className={styles["progress-bar-container"]} style={{}}>
    <div
      className={styles["progress-bar-indicator"]}
      style={{
        width: animate ? `${progress}%` : "0%",
        backgroundColor: color,
      }}
    >
      <span></span>
    </div>
  </div>
);
