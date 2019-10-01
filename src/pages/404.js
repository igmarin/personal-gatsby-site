import React from "react"
import { Link } from "gatsby"
import styles from "./404.module.scss"

export default () => (
  <div>
    <div>
      <Link to="/about">About</Link> | <Link to="/">Home</Link>
    </div>
    <h1>No existo</h1>
    <p className={styles.message}>Soy o no soy</p>
  </div>
)