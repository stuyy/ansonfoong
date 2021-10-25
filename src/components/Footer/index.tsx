import styles from "./Footer.module.scss";
import {
  FaDiscord,
  FaYoutubeSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export const Footer = () => (
  <footer className={styles.footer}>
    <FaDiscord size={40} />
    <FaYoutubeSquare size={40} />
    <FaLinkedin size={40} />
    <FaGithubSquare size={40} />
  </footer>
);
