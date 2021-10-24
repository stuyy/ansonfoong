import styles from "./index.module.scss";
import { routes } from "../../utils/routes";

export const Header = () => (
  <header className={styles.header}>
    <div>
      <h1>ansonfoong</h1>
    </div>
    <ul>
      {routes.map((route) => (
        <li key={route.name} className={styles.header_link}>
          {route.name}
        </li>
      ))}
    </ul>
  </header>
);
