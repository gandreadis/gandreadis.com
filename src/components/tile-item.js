import React from 'react'
import { Card, Col } from 'react-bootstrap'

const TileItem = ({ title, subtitle, keywords, children }) => (
  <Col md={6} xs={12} className="py-2">
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h3 className="mb-0">{title}</h3>
        </Card.Title>
        <div className="d-flex flex-column flex-fill">
          <div className="flex-fill">
            <p className="lead">{subtitle}</p>
            {children}
          </div>
          <div>
            {keywords.map((keyword, index) => (
              <span
                className="badge badge-pill badge-secondary mr-1"
                key={index}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  </Col>
)

export default TileItem
