import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideBar.module.css";

const SideBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        <div className={styles.menuItems}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <div className={styles.menuTitle}>Home</div>
        </div>
        <div className={styles.menuItems}>2</div>
        <div className={styles.menuItems}>3</div>
        <div className={styles.menuItems}>4</div>
        <div className={styles.menuItems}>5</div>
        <div className={styles.menuItems}>
          <FontAwesomeIcon icon={faGear} size="lg" />
          <div className={styles.menuTitle}>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
