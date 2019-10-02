import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.scss"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <Link to="/about">About</Link> | <Link to="/">Home</Link>
    </div>
    <h1>Yo</h1>
    <p className={styles.message}>Just me</p>
  </Layout>
)