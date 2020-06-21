import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Music = () => (
  <Layout pageInfo={{ name: 'music', title: 'Music' }}>
    <SEO title="Music" />
    <em>
      <span role="img" aria-label="Construction">
        🚧
      </span>
      {' '}
      Coming soon!
      {' '}
      <span role="img" aria-label="Construction">
        🚧
      </span>
    </em>
  </Layout>
)

export default Music
