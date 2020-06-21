import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BioItem = ({ emoji, title, subtitle, children }) => (
  <Col lg={3} md={6} sm={12}>
    <h2>{emoji}</h2>
    <p className="lead">
      {title}
      <br />
      <em>{subtitle}</em>
    </p>
    <p className="content">{children}</p>
  </Col>
)

const Index = () => (
  <Layout pageInfo={{ name: 'index' }}>
    <SEO
      title="Home"
      keywords={[
        `georgios`,
        `andreadis`,
        `jorgos`,
        `gandreadis`,
        `geoandreadis`,
      ]}
    />
    <div className="image-jumbotron" />
    <Container className="text-center pt-3">
      <Row>
        <Col>
          <h1>
            Hi!{' '}
            <span role="img" aria-label="Wave">
              👋
            </span>
          </h1>
          <h2>I'm Georgios (Jorgos) Andreadis</h2>
          <p className="lead">
            This is a short overview of what I currently do{' '}
            <span role="img" aria-label="Wave">
              ⬇️
            </span>
          </p>
        </Col>
      </Row>
      <Row className="pt-3">
        <BioItem emoji="🎓" title="M.Sc. Student" subtitle="TU Delft">
          I recently finished my B.Sc. in <strong>Computer Science</strong> with
          Honours at <strong>TU Delft</strong> and I'm now pursuing a M.Sc.
          degree in Software Technology
        </BioItem>
        <BioItem
          emoji="📄"
          title="Junior Researcher"
          subtitle="AtLarge Research"
        >
          Starting during my BSc Honours Track, I've been researching
          datacenters, working in the{' '}
          <a href="http://atlarge.science" className="has-text-weight-bold">
            AtLarge Research Group
          </a>
        </BioItem>
        <BioItem emoji="👨‍💻" title="Technology Lead" subtitle="OpenDC">
          I am the Technology Lead for the{' '}
          <a href="https://opendc.org" className="has-text-weight-bold">
            OpenDC project
          </a>
          , an effort to provide accessible datacenter simulation in a web
          application format
        </BioItem>
        <BioItem emoji="🎵" title="Viola Player" subtitle="Ricciotti & Krashna">
          I currently play the viola in the Dutch street symphony orchestra, the{' '}
          <a href="https://ricciotti.nl" className="has-text-weight-bold">
            Ricciotti Ensemble
          </a>
          , and Delft's student symphony orchestra,{' '}
          <a href="https://krashna.nl" className="has-text-weight-bold">
            Krashna Musika
          </a>
        </BioItem>
      </Row>
    </Container>
  </Layout>
)

export default Index
