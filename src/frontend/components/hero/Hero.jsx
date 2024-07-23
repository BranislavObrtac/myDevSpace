import React from "react";
import Navigation from "./Navigation";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <div className={styles.hero_shadow}>
        <div className={styles.shadow_group}>
          <div className={styles.ellipse_1}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <h1>
            Branislav <span>Obrtáč</span>
          </h1>
          <p className={styles.subtitle}>Frontend developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
