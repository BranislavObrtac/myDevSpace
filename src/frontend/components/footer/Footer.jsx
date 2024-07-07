import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        ©{new Date().getFullYear()} MyDevSpace Branislav Obrtáč
      </div>
    </div>
  );
};

export default Footer;
