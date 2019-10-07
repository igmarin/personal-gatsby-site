import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styles from "./header.module.scss";

const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <header className={styles.header}>
        <h1>{data.site.siteMetadata.title}</h1>
        <div className={styles.links}>
          <HeaderLink to="/" text="Home" /> | <HeaderLink to="/about" text="About" />
        </div>
      </header>
    )}
  />
)