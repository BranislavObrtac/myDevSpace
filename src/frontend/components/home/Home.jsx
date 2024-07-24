import React from "react";
import facePicture from "../../images/facePicture.png";
import styles from "./Home.module.scss";
import classNames from "classnames";
import AnimateDropdown from "../animateDropdown/AnimateDropdown";

const Home = () => {
  const [showMoreAboutMe, setShowMoreAboutMe] = React.useState(false);

  return (
    <section className={styles.wrapper}>
      <article className={styles.section_about}>
        <h2 className={styles.section_title}>About me</h2>
        <div className={styles.about}>
          <div className={styles.photo_wrapper}>
            <img src={facePicture} alt="face picture" />
          </div>
          <p>
            Hello! My name is Branislav and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try creating my first website. Ever since then, I
            have been learning and improving my skills.{` `}
            <span className={styles.blue}>
              I am passionate about building web applications that are fast,
              responsive, and user-friendly.
            </span>
          </p>
          <button onClick={() => setShowMoreAboutMe(!showMoreAboutMe)}>
            More about me
          </button>
          <AnimateDropdown open={showMoreAboutMe}>
            <p>da dad da</p>
          </AnimateDropdown>
        </div>
      </article>
    </section>
  );
};

export default Home;
