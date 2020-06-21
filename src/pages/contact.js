import React from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaResearchgate,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({ title, icon, link }) => (
  <Col lg={2} md={3} sm={6} className="text-center pb-3">
    <a
      href={link}
      className="d-inline-block lead"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      <br />
      {title}
    </a>
  </Col>
)

const Contact = () => (
  <Layout pageInfo={{ name: 'contact', title: 'Contact' }}>
    <SEO title="Contact" />
    <Row className="justify-content-center">
      <ContactItem
        title="Email"
        icon={<FaEnvelope size="3em" />}
        link="mailto:info@gandreadis.com"
      />
      <ContactItem
        title="GitHub"
        icon={<FaGithub size="3em" />}
        link="https://github.com/gandreadis"
      />
      <ContactItem
        title="LinkedIn"
        icon={<FaLinkedin size="3em" />}
        link="https://linkedin.com/in/gandreadis"
      />
      <ContactItem
        title="ResearchGate"
        icon={<FaResearchgate size="3em" />}
        link="https://www.researchgate.net/profile/Georgios_Andreadis4"
      />
      <ContactItem
        title="StackOverflow"
        icon={<FaStackOverflow size="3em" />}
        link="https://stackoverflow.com/users/975317/gandreadis"
      />
      <ContactItem
        title="Twitter"
        icon={<FaTwitter size="3em" />}
        link="https://twitter.com/geoandreadis"
      />
    </Row>
  </Layout>
)

export default Contact
