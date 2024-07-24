import React, { useEffect, useState } from "react";
import styles from "./AnimateDropdown.module.scss";
import classNames from "classnames";

const AnimateDropdown = ({ open, children }) => {
  const [renderContent, setRenderContent] = useState(open);

  useEffect(() => {
    let timeoutId;
    if (open) {
      setRenderContent(true);
    } else {
      timeoutId = setTimeout(() => {
        setRenderContent(false);
      }, 300);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [open]);

  const animateDropdownClasses = classNames(styles.wrapper, {
    [styles.open]: open,
  });

  return (
    <div className={animateDropdownClasses}>
      <div className={styles.inner}>{renderContent && children}</div>
    </div>
  );
};

export default AnimateDropdown;
