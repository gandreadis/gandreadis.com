import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Music = () => (
  <Layout pageInfo={{ name: 'music', title: 'Music' }}>
    <SEO title="Music" />
    <p className="lead text-center">
      I am violist in the <a href="https://ricciotti.nl">Ricciotti Ensemble</a>{' '}
      and founding member of the new{' '}
      <a href="https://ensemblezoef.nl">ZOEF collective</a>!
      <br />I have played in a number of projects and studio recordings, please
      contact me for a full CV.
    </p>
  </Layout>
)

export default Music
