import { GetStaticPathsResult, GetStaticPropsContext, NextPage } from "next";
import { Project, projects } from "../../../utils/projects";
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
  context: GetStaticPropsContext<{ project: string }>
) {
  console.log(context);
  const project = projects.find((p) => p.pathname === context.params?.project);
  return {
    props: { project },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = projects.map((project) => ({
    params: { project: project.pathname },
  }));
  return { paths, fallback: false };
}

export default ProjectPage;
