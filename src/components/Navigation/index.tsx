import Link from "next/link";
import { routes } from "../../utils/constants";
import styles from "./index.module.scss";

export const Navigation = () => (
  <header className={styles.header}>
    <div className={styles["header-container"]}>
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
    </div>
  </header>
);
