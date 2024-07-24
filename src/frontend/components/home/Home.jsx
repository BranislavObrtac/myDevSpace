import React from "react";
import facePicture from "../../images/facePicture.png";
import facePictureSkialp from "../../images/photoSkialpFace.jpg";

import styles from "./Home.module.scss";
import AnimateDropdown from "../animateDropdown/AnimateDropdown";
import Plus from "../../icons/plus.svg?react";
import Minus from "../../icons/minus.svg?react";

const Home = () => {
  const [showMoreAboutMe, setShowMoreAboutMe] = React.useState(false);

  return (
    <section className={styles.wrapper}>
      <article className={styles.present_section}>
        <h2>PECKY</h2>
      </article>
      <article className={styles.section_about}>
        <h2 className={styles.section_title}>About me</h2>
        <div className={styles.about}>
          <div className={styles.photo_wrapper}>
            <img src={facePicture} alt="face picture" />
          </div>
          <div className={styles.text_content}>
            <p>
              Hello! My name is Branislav and I enjoy creating things that live
              on the <span className={styles.blue}>internet</span>. My interest
              in web development started back in 2012 when I decided to try
              creating my first website. Ever since then, I have been learning
              and improving my skills.
              <p>
                I am passionate about building web applications that are{" "}
                <span className={styles.blue}>fast</span>,
                <span className={styles.blue}>responsive</span>, and{" "}
                <span className={styles.blue}>user-friendly</span>.
              </p>
              I love working with <span className={styles.blue}>React</span>,
              but I am always open to learning new technologies.
              <p>
                I am <span className={styles.blue}>friendly</span>,{" "}
                <span className={styles.blue}>open-minded</span> and I love to
                <span className={styles.blue}> work in a team</span>.
              </p>
            </p>
          </div>
          <div className={styles.more_about_me}>
            <button
              className={styles.btn_more_about_me}
              onClick={() => setShowMoreAboutMe(!showMoreAboutMe)}
            >
              {showMoreAboutMe ? "Less" : "More"} about me
              {showMoreAboutMe ? <Minus /> : <Plus />}
            </button>
            <AnimateDropdown open={showMoreAboutMe}>
              <p>
                When I am not coding, I love spending my time outdoors. I am an
                avid
                <span className={styles.blue}> hiker</span> and often find
                myself exploring new trails in the mountains.
              </p>
              <div>
                <div className={styles.photo_wrapper_small}>
                  <img src={facePictureSkialp} alt="face picture" />
                </div>
                <p>
                  During the winter months, you can find me on the slopes. I
                  have a passion for
                  <span className={styles.blue}> skiing and ski touring</span>,
                  there's nothing like the thrill of gliding down the mountain
                  slopes. It's a perfect blend of adrenaline and the beauty of
                  nature.
                </p>
              </div>
              <p>
                <span className={styles.blue}>Fitness</span> is also a
                significant part of my life. I enjoy pushing my limits and
                staying active. It helps me maintain a healthy balance and keeps
                my mind sharp.
              </p>
            </AnimateDropdown>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
