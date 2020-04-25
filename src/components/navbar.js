import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Navbar extends Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");

        });
      });
    }
  }

  render() {
    return (
      <nav className="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Georgios Andreadis
            </Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="topNavbar" href="#">
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </a>
          </div>

          <div id="topNavbar" className="navbar-menu">
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
    );
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
