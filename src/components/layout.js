/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ headerTitle, headerSubtitle, headerColor, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta name="theme-color" content="#00a6ed"/>

        <html className="is-fullheight" lang="en"/>
        <body className="has-navbar-fixed-top is-fullheight"/>

        <script src="https://use.fontawesome.com/9765839b42.js"/>
      </Helmet>
      <Navbar siteTitle={data.site.siteMetadata.title}/>
      <div className="is-fullheight main-content">
        <main>
          {headerTitle ? (
            <>
              <section className={`hero is-${headerColor} is-bold`}>
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">
                      {headerTitle}
                    </h1>
                    <h2 className="subtitle">
                      {headerSubtitle}
                    </h2>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  {children}
                </div>
              </section>
            </>
          ) : children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
