import React from "react"

import Layout from "../components/layout"
import ProjectItems from "../components/project-items"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout headerTitle="Projects" headerSubtitle="Things I've been working on" headerColor="warning">
    <SEO title="Projects"/>
    <ProjectItems/>
  </Layout>
)

export default ProjectsPage
