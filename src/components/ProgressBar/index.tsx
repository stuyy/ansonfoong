import styles from "./ProgressBar.module.scss";

export type ProgressBarProps = {
  spacing?: string;
  color: string;
  progress: number;
  animate: boolean;
};

export const ProgressBar = ({
  spacing,
  color,
  progress,
  animate,
}: ProgressBarProps) => (
  <div
    className={styles["progress-bar-container"]}
    style={{
      marginLeft: spacing,
    }}
  >
    <div
      className={styles["progress-bar-indicator"]}
      style={{
        width: animate ? `${progress}%` : "0%",
        backgroundColor: color,
      }}
    ></div>
  </div>
);
