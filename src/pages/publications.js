import React from "react"

import Layout from "../components/layout"
import PublicationItems from "../components/publication-items"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout headerTitle="Publications" headerSubtitle="Publications I have (co)authored" headerColor="success">
    <SEO title="Publications"/>
    <PublicationItems/>
  </Layout>
)

export default ProjectsPage
