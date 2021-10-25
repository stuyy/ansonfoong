import { NextPage } from "next";
import { Project } from "../../components/Project";
import { projects } from "../../utils/projects";
import styles from "./projects-page.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <div className="page">
      <div className={styles["projects-page-body"]}>
        <div className={styles["title-container"]}>
          <h1>Personal Projects</h1>
        </div>
        <div className={styles["projects-content"]}>
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
