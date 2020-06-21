import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout pageInfo={{ name: '404', title: 'Page Not Found' }}>
    <SEO title="404: Not found" />
    <p>
      This page doesn't exist. <a href="/">Return home</a>?
    </p>
  </Layout>
)

export default NotFoundPage
