import styles from "./ProgressBar.module.scss";

export type ProgressBarProps = {
  spacing?: string;
  color: string;
  progress: number;
};

export const ProgressBar = ({ spacing, color, progress }: ProgressBarProps) => (
  <div
    className={styles["progress-bar-container"]}
    style={{
      marginLeft: spacing,
    }}
  >
    <div
      className={styles["progress-bar-indicator"]}
      style={{
        width: `${progress}%`,
        backgroundColor: color,
      }}
    ></div>
  </div>
);
