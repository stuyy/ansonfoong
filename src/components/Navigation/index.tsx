import Link from "next/link";
import styles from "./index.module.scss";
import { routes } from "../../utils/routes";

export const Navigation = () => (
  <header className={styles.header}>
    <div>
      <h1>ansonfoong</h1>
    </div>
    <ul>
      {routes.map((route) => (
        <li key={route.name} className={styles.header_link}>
          <Link href={route.path}>
            <a>{route.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </header>
);
