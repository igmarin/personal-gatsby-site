import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";

const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

export default ({ children }) => (
  <header className={styles.header}>
    <HeaderLink to="/" text="Home" /> | <HeaderLink to="/about" text="About" />
    {children}
  </header>
)