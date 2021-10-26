import Head from "next/head";
import { GetStaticPathsResult, GetStaticPropsContext, NextPage } from "next";
import { Button } from "../../../components/Button";
import { projects } from "../../../utils/projects";
import { Project } from "../../../utils/types";
import styles from "../projects-page.module.scss";
type ProjectProps = {
  project: Project;
};
const ProjectListingPage: NextPage<ProjectProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta property="og:title" content={project.title} key="title" />
      </Head>
      <div className="page">
        <div className={styles["project-listing-body"]}>
          <div className={styles["project-listing-title-container"]}>
            <h1>{project.title}</h1>
          </div>
          <div className={styles["project-listing-contents"]}>
            <p>{project.description}</p>
            <h3>Technologies</h3>
            <ul>
              {project.technologies.map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </div>
          <footer className={styles["project-listing-footer"]}>
            <Button label="View On GitHub" size="md" variant="secondary" />
          </footer>
        </div>
      </div>
    </>
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

export default ProjectListingPage;
