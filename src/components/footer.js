import React from "react";
import styles from "./footer.module.scss";

export default ({ children }) => (
  <div className={styles.footer}>
    {children}
  </div>
)