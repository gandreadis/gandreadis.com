import React from 'react'

import { Container } from 'react-bootstrap'

const Section = ({ id, title, children }) => (
  <div className="py-5 bg-primary" id={id}>
    <Container>
      <h2 className="text-center pb-2">{title}</h2>
      {children}
    </Container>
  </div>
)

export default Section
