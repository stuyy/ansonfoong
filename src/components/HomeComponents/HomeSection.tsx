import styles from "./HomeSection.module.scss";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SOCIAL_LINKS } from "../../utils/constants";
import { SocialMediaLinkType } from "../../utils/types";
import React, { RefObject } from "react";

export const HomeSection = React.forwardRef<HTMLDivElement, {}>(
  (props, ref) => {
    const TARGET = "_blank";
    const gotoLink = (link: SocialMediaLinkType) =>
      window.open(SOCIAL_LINKS[link], TARGET) ||
      window.location.replace(SOCIAL_LINKS[link]);

    return (
      <div className={styles["home-section"]}>
        <section className={styles["home-side-section"]}>
          <div className={styles.maintitle}>
            <h2>Leveling programmers up with quality tutorials</h2>
          </div>
          <div
            className={styles.learnmore}
            onClick={() => {
              const mutableRef = ref as RefObject<HTMLDivElement>;
              if (mutableRef && mutableRef.current) {
                mutableRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <p>Learn More About Me</p>
            <BsArrowDownCircle size={32} />
          </div>
        </section>
        <section className={styles["buttons-container"]}>
          <div
            className={`${styles.button} ${styles["button-github"]}`}
            onClick={() => gotoLink("github")}
          >
            <VscGithub size={45} />
            <h3>GitHub</h3>
          </div>
          <div
            className={`${styles.button} ${styles["button-linkedin"]}`}
            onClick={() => gotoLink("linkedin")}
          >
            <FaLinkedin size={45} />
            <h3>LinkedIn</h3>
          </div>
        </section>
      </div>
    );
  }
);
