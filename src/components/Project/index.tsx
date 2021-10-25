import styles from "./project.module.scss";
import { Button } from "../Button";
import { useRouter } from "next/dist/client/router";

export type ProjectComponentProps = {
  title: string;
  description: string;
  src: string;
  reverse?: boolean;
  pathname: string;
};

export const Project = ({
  title,
  description,
  src,
  reverse,
  pathname,
}: ProjectComponentProps) => {
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
        <div>
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
        <img src={src} alt={src} />
      </div>
    </div>
  );
};
