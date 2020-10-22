import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHospital, FaMusic } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
    <div className="image-jumbotron">
      <Container>
        <Row>
          <Col className="text-white mt-5">
            <h1 className="mt-4 display-4">Georgios Andreadis</h1>
            <p>
              PhD Candidate @ LUMC Leiden & CWI <FaHospital className="ml-1" />
              <br />
              Violist @ Ricciotti Ensemble & ZOEF{' '}
              <FaMusic className="ml-1" />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default Index
