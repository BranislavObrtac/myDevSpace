import { Link } from "@tanstack/react-router";
import React from "react";
import styles from "./Navigation.module.scss";

const activeProps = {
  style: {
    outline: "1px solid hsl(0, 0%, 10%)",
    outlineOffset: "2px",
  },
};

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.home}>
        <Link to="/" activeProps={activeProps}>
          HOME
        </Link>
      </div>
      <ul className={styles.elements}>
        <li className={styles.element}>
          <Link className={styles.link} to={"/about"} activeProps={activeProps}>
            About
          </Link>
        </li>
        <li className={styles.element}>
          <Link
            className={styles.link}
            to={"/projects"}
            activeProps={activeProps}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
