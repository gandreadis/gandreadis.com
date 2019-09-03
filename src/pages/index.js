import React from "react"
import ContactIcons from "../components/contact-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.scss"
import ShortBio from "../components/short-bio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <section className="hero is-medium is-success is-bold">
      <div className="hero-body">
        <div className="container">
          <ContactIcons/>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <ShortBio/>
      </div>
    </section>
  </Layout>
)

export default IndexPage
