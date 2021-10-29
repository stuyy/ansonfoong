import styles from "./project.module.scss";
import { Button } from "../Button";
import { useRouter } from "next/dist/client/router";
import { Project } from "../../utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ProjectComponentProps = {
  project: Project;
};

export const ProjectListing = ({ project }: ProjectComponentProps) => {
  const { title, src, reverse, pathname } = project;
  const [visible, setVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [description, setDescription] = useState(project.description);
  const [currentWidth, setCurrentWidth] = useState(0);
  const minDescription = project.description.slice(0, 100).concat("...");
  const router = useRouter();

  const WIDTH_BREAKPOINT = 650;

  useEffect(() => {
    setCurrentWidth(window.outerWidth);
    const handleResize = () => {
      const { outerWidth } = window;
      console.log(`Current Width: ${currentWidth}\nNew Width: ${outerWidth}`);
      setCurrentWidth(window.outerWidth);
      if (currentWidth !== outerWidth) {
        console.log(showMore);
        if (outerWidth >= WIDTH_BREAKPOINT) {
          setVisible(false);
          setShowMore(false);
          setDescription(project.description);
        } else {
          console.log("Here");
          console.log(showMore);
          setVisible(true);
          setDescription(showMore ? project.description : minDescription);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth]); // Only want state to update when Outer Width changes.

  const toggleDescription = () => {
    setDescription(showMore ? minDescription : project.description);
    setShowMore(!showMore);
  };

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
          <p>
            {description}
            {visible && (
              <span
                style={{ color: "#808080", fontWeight: "bold" }}
                onClick={toggleDescription}
              >
                {showMore ? "Show Less" : "Show More"}
              </span>
            )}
          </p>
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
