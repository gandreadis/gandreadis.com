import React from 'react'
import { Link } from 'gatsby'

import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import * as PropTypes from 'prop-types'

const NavLink = ({ title, url }) => (
  <Link to={url}>
    <Nav.Link as="span" className="text-light">
      {title}
    </Nav.Link>
  </Link>
)

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { transparent: true }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', () => {
      this.checkScrollState()
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.listener)
  }

  checkScrollState() {
    const scrolled = document.scrollingElement.scrollTop
    if (scrolled >= 120) {
      if (this.state.transparent) {
        this.setState({ transparent: false })
      }
    } else {
      if (!this.state.transparent) {
        this.setState({ transparent: true })
      }
    }
  }

  render() {
    let { pageInfo } = this.props
    return (
      <>
        <Navbar
          variant="light"
          bg={
            this.state.transparent && pageInfo.name === 'index'
              ? 'transparent'
              : 'primary'
          }
          expand="md"
          id="site-navbar"
          fixed="top"
        >
          <Container>
            <Link to="/">
              <Navbar.Brand as="span" className="text-light">
                Georgios Andreadis
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" activeKey={pageInfo && pageInfo.name}>
                <NavLink title="Projects" url="/projects" />
                <NavLink title="Research" url="/research" />
                <NavLink title="Music" url="/music" />
                <NavLink title="Contact" url="/contact" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

CustomNavbar.propTypes = { pageInfo: PropTypes.any }

export default CustomNavbar
