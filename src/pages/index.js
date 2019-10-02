import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <Link to="/about">About</Link> | <Link to="/">Home</Link>
    </div>
    <h1>This is my page</h1>
    <h4>La verdad es la casa azul</h4>
    <p>Hello! Friend</p>
  </Layout>
)