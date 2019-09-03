import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Built with <i className="fa fa-heart"/> in <strong>NL</strong> -
          Website source on <a href="https://github.com/gandreadis/gandreadis.com">
          <i className="fa fa-github"/> GitHub</a>
        </p>
        <p>
          Copyright &copy; {(new Date()).getFullYear()}
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
