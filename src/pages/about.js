import React from "react";
import styles from "./about.module.scss";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Yo</h1>
    <p className={styles.message}>Just me</p>
  </Layout>
)