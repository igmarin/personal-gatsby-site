import React from "react";
import styles from "./layout.module.scss";
import Footer from "./footer.js";

export default ({ children }) => (
  <div className={styles.wrapper}>
    {children}
    <Footer>Personal site if you want to know more feel free to email to: </Footer>
  </div>
)