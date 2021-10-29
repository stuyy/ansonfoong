import { NextPage } from "next";
import Head from "next/head";
import { ProjectListing } from "../../components/Project";
import { projects } from "../../utils/projects";
import styles from "./projects-page.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>anson's projects</title>
        <meta
          property="og:title"
          content="Anson Foong's Projects"
          key="title"
        />
        <meta
          property="og:description"
          content="List of all of Anson Foong's Programming Projects"
        />
      </Head>
      <div className="page">
        <div className={styles["projects-page-body"]}>
          <div className={styles["title-container"]}>
            <h1>Personal Projects</h1>
          </div>
          <div className={styles["projects-content"]}>
            {projects.map((project, index) => (
              <ProjectListing
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
