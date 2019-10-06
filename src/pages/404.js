import React from "react";
import styles from "./404.module.scss";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>404</h1>
    <p className={styles.message}>Sorry but this page doens't exists</p>
  </Layout >
)