import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Link to="/about">About</Link> | <Link to="/">CV</Link>
    <h1>Hello! My name is Ismael G Marín</h1>
  </Layout>
)