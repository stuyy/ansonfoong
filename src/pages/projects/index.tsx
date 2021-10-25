import { NextPage } from "next";
import { Project } from "../../components/Project";
import styles from "./projects-page.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <div className="page">
      <div className={styles["projects-page-body"]}>
        <div className={styles["title-container"]}>
          <h1>Personal Projects</h1>
        </div>
        <div className={styles["projects-content"]}>
          <Project
            title="UAlbany Laundry"
            description="Tracks the status of a washer or dryer, all over campus, allowing users to know when a laundry machine is available. Data is fetched from the Service Works API, in XML format. My back-end API was written in Flask, which fetches the laundry machine data and parses it to JSON, and sends it to the front-end, which was built with Ionic 4 & Angular. "
            src="/me.png"
          />
          <Project
            title="UAlbany Laundry"
            description="Tracks the status of a washer or dryer, all over campus, allowing users to know when a laundry machine is available. Data is fetched from the Service Works API, in XML format. My back-end API was written in Flask, which fetches the laundry machine data and parses it to JSON, and sends it to the front-end, which was built with Ionic 4 & Angular. "
            src="/me.png"
            reverse={true}
          />
          <Project
            title="UAlbany Laundry"
            description="Tracks the status of a washer or dryer, all over campus, allowing users to know when a laundry machine is available. Data is fetched from the Service Works API, in XML format. My back-end API was written in Flask, which fetches the laundry machine data and parses it to JSON, and sends it to the front-end, which was built with Ionic 4 & Angular. "
            src="/me.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
