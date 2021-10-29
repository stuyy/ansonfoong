import styles from "./AboutSection.module.scss";
import Image from "next/image";
import React from "react";

export const AboutSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles["about-section"]} ref={ref}>
      <h2>Hello! I’m Anson. I’m a Software Engineer & Content Creator.</h2>
      <div className={styles["about-content-container"]}>
        <Image src="/me.png" width={200} height={200} alt="me.png" />
        <div className={styles["about-content-paragraph"]}>
          <p>
            I currently work as a Software Engineer. My go-to stack is React,
            NestJS, & MySQL. Other skills I am experienced with include Spring,
            Flutter, React Native, GraphQL, Docker, GitHub Actions, Jenkins,
            Storybook, Figma. As an educator, I have tutored for several
            organizations at the University at Albany. I have also worked as a
            Teaching Assistant for several Computer Science classes, and run my
            own YouTube channel, where I post tutorials for programming, and
            livestream myself building projects. My other hobbies include
            longboarding, learning guitar, reading books, going out for long
            refreshing walks, and learning how to cook.
          </p>
        </div>
      </div>
    </div>
  );
});
