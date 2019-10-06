import React from "react";
import styles from "./layout.module.scss";
import Footer from "./footer.js";
import Header from "./header.js";

export default ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
)