import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <nav className="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Georgios Andreadis
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample" href="#">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
        </div>

        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/projects" className="navbar-item">
            Projects
          </Link>
          <Link to="/publications" className="navbar-item">
            Publications
          </Link>
          <Link to="/music" className="navbar-item">
            Music
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
