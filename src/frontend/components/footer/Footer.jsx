import React from "react";
import styles from "./Footer.module.scss";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        ©{new Date().getFullYear()} MyDevSpace Branislav Obrtáč
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
