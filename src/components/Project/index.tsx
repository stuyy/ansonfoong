import styles from "./project.module.scss";
import Image from "next/image";
import { Button } from "../Button";

export type ProjectComponentProps = {
  title: string;
  description: string;
  src: string;
};

export const Project = ({ title, description, src }: ProjectComponentProps) => {
  return (
    <div className={styles["project-container"]}>
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
