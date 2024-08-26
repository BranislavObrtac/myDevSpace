import React from "react";
import styles from "./Experience.module.scss";
import { Link } from "@tanstack/react-router";

const Experience = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Experience</h1>
        <div className={styles.experience}>
          <div className={styles.experience_item}>
            <h2>Frontend Developer</h2>
            <div>
              <p>
                Company:{" "}
                <Link to={"https://www.sazp.sk/"}>
                  Slovak environment agency
                </Link>
              </p>
              <p>Duration: 2022 - Present</p>
              <p>
                Description: I am working as a frontend developer on various
                projects. I am responsible for creating and maintaining websites
                and web applications. I am also working on improving the user
                experience and performance of the websites.
              </p>
            </div>
          </div>
          <div className={styles.experience_item}>
            <h2>Web Developer</h2>
            <div>
              <p>Company: Freelance</p>
              <p>Duration: 2020 - 2022</p>
              <p>
                Web Developer with experience in eCommerce Solutions I developed
                a eCommerce platform using PHP (Laravel). Additionally, I have
                designed and launched multiple WordPress-based websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
