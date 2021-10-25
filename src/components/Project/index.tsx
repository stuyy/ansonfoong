import styles from "./project.module.scss";
import Image from "next/image";
import { Button } from "../Button";

export type ProjectComponentProps = {
  title: string;
  description: string;
  src: string;
  reverse?: boolean;
};

export const Project = ({
  title,
  description,
  src,
  reverse,
}: ProjectComponentProps) => {
  const containerStyles = `${styles["project-container"]} ${
    reverse && styles["project-container-reverse"]
  }`;
  return (
    <div className={containerStyles}>
      <div className={styles["project-container-body"]}>
        <div className={styles["project-container-content"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <Button label="GitHub" variant="secondary" />
        </div>
      </div>
      <div>
        <img src={src} alt={src} />
      </div>
    </div>
  );
};
