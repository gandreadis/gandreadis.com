import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/index.scss";

const NotFoundPage = () => (
  <Layout headerTitle="404" headerSubtitle="Page Not Found" headerColor="warning">
    <SEO title="404: Not found"/>
    <p>This page doesn't exist. <Link to="/">Return home</Link>?</p>
  </Layout>
)

export default NotFoundPage
