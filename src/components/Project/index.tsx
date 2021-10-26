import styles from "./project.module.scss";
import { Button } from "../Button";
import { useRouter } from "next/dist/client/router";
import { Project } from "../../utils/types";
import Image from "next/image";

export type ProjectComponentProps = {
  project: Project;
};

export const ProjectListing = ({ project }: ProjectComponentProps) => {
  const { title, description, src, reverse, pathname } = project;

  const router = useRouter();
  const containerStyles = `${styles["project-container"]} ${
    reverse && styles["project-container-reverse"]
  }`;

  const containerBodyStyles = `${styles["project-container-body"]} ${
    reverse && styles["container-body-reverse"]
  }`;

  return (
    <div className={containerStyles}>
      <div className={containerBodyStyles}>
        <div className={styles["project-container-content"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles["project-buttons"]}>
          <Button
            label="GitHub"
            variant="secondary"
            onClick={() => window.location.assign("http://github.com")}
            style={{ marginRight: "10px" }}
          />
          <Button
            label="View"
            onClick={() => router.push(`/projects/${pathname}`)}
          ></Button>
        </div>
      </div>
      <div>
        <Image src={src} alt={src} width="175px" height="175px" />
      </div>
    </div>
  );
};
