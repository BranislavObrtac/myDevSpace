import { Link } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.home}>
        <Link className={styles.logo} to="/">
          B
        </Link>
      </div>
      <ul className={styles.elements}>
        <li className={styles.element}>
          <Link className={styles.link} to={"/experience"}>
            Experience
          </Link>
        </li>
        <li className={styles.element}>
          <Link className={styles.link} to={"/work"}>
            Work
          </Link>
        </li>
        <li className={styles.element}>
          <Link className={styles.link} to={"/contact"}>
            Contact
          </Link>
        </li>
        <li className={styles.element}>
          <Link className={styles.link_btn} to={"/resume"}>
            Resume
          </Link>
        </li>
      </ul>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            width="48px"
            viewBox="0 -960 960 960"
          >
            <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            width="48px"
            viewBox="0 -960 960 960"
          >
            <path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z" />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className={styles.elements_mobile} ref={menuRef}>
          <li className={styles.element}>
            <Link className={styles.link} to={"/experience"}>
              Experience
            </Link>
          </li>
          <li className={styles.element}>
            <Link className={styles.link} to={"/work"}>
              Work
            </Link>
          </li>
          <li className={styles.element}>
            <Link className={styles.link} to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className={styles.element}>
            <Link
              className={styles.link_btn}
              onClick={() => setIsOpen(false)}
              to={"/resume"}
            >
              Resume
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
