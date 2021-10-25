import { GetStaticPathsResult, GetStaticPropsContext, NextPage } from "next";
import { projects } from "../../../utils/projects";
import { Project } from "../../../utils/types";
import styles from "../projects-page.module.scss";
type ProjectProps = {
  project: Project;
};
const ProjectPage: NextPage<ProjectProps> = ({ project }) => {
  return (
    <div className="page">
      <div className={styles["project-listing-body"]}>
        <div className={styles["title-container"]}>
          <h1>{project.title}</h1>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ name: string }>
) {
  console.log(context);
  const project = projects.find((p) => p.pathname === context.params?.name);
  return {
    props: { project },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = projects.map((project) => ({
    params: { name: project.pathname },
  }));
  return { paths, fallback: false };
}

export default ProjectPage;
