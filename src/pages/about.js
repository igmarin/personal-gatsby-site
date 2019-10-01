import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.scss"

export default () => (
  <div className={styles.content}>
    <div>
      <Link to="/about">About</Link> | <Link to="/">Home</Link>
    </div>
    <h1>Yo</h1>
    <p className={styles.message}>Just me</p>
  </div>
)