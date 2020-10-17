import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button, Row } from 'react-bootstrap'
import TileItem from '../components/tile-item'

const ProjectItem = ({ title, subtitle, team, context, link, keywords }) => (
  <TileItem title={'🔨 ' + title} subtitle={subtitle} keywords={keywords}>
    <div>
      {team && context
        ? `${team} - ${context}`
        : team
        ? team
        : context
        ? context
        : undefined}
    </div>
    <div>
      {link ? (
        <div className="py-1">
          <Button href={link} variant="primary" size="sm">
            Project Website
          </Button>
        </div>
      ) : undefined}
    </div>
  </TileItem>
)

const Projects = () => (
  <Layout pageInfo={{ name: 'projects', title: 'Projects' }}>
    <SEO title="Projects" />
    <Row>
      <ProjectItem
        title="OpenDC"
        subtitle="Collaborative Datacenter Simulation and Exploration for Everybody"
        team="Team @Large"
        context="Bachelor Honours Track"
        link="https://opendc.org"
        keywords={['datacenters', 'simulator', 'web app']}
      />
      <ProjectItem
        title="Schaapi"
        subtitle="Early Detection of Breaking Changes Based on API Usages"
        team="Team Café Jojo"
        context="Bachelor Thesis"
        link="https://cafejojo.org/schaapi"
        keywords={[
          'software engineering',
          'automated test generation',
          'breaking changes',
        ]}
      />
      <ProjectItem
        title="We\Visit"
        subtitle="Platform for relatives to connect with patients in hospital through video calls"
        context="Volunteer Maintainer & Developer"
        link="https://wevisit.hospital/"
        keywords={['hospital', 'video calling', 'corona']}
      />
      <ProjectItem
        title="Statistak"
        subtitle="Tour Log and Statistics for the Ricciotti Ensemble"
        context="Side Project"
        link="https://statistak.nl"
        keywords={['music', 'tour', 'web app']}
      />
      <ProjectItem
        title="qEHBO"
        subtitle="Dutch First Aid Mobile Training App"
        context="Side Project"
        link="https://github.com/gandreadis/qehbo"
        keywords={['education', 'mobile', 'quiz']}
      />
      <ProjectItem
        title="Support NJON"
        subtitle="Site to support the NJON funding campaign"
        context="Website Consulting"
        link="https://support-njon.nl"
        keywords={['testimonials', 'campaign']}
      />
    </Row>
  </Layout>
)

export default Projects
