import React from "react"
import styles from "./layout.module.scss"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className={styles.wrapper}>
    {children}
    <Footer>
      2019 Ismael Marín Site
    </Footer>
  </div>
)