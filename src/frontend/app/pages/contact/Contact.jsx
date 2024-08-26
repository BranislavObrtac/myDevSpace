import React from "react";
import styles from "./Contact.module.scss";
import Socials from "../../../components/socials/Socials";
import { Link } from "@tanstack/react-router";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Details</h1>
      <div className={styles.contactDetails}>
        <Link to="mailto:branislav.obrtac@gmail.com">
          Email: branislav.obrtac@gmail.com
        </Link>
        <p>Phone: +421 911 829 151</p>
      </div>

      <h2>Socials</h2>
      <div className={styles.socialMedia}>
        <Socials size={24} />
      </div>
    </div>
  );
};

export default Contact;
