import React from 'react'
import { FaGithub, FaHeart, FaCamera } from 'react-icons/fa'

const Footer = () => (
  <footer className="text-center text-muted pt-2">
    <p>
      Built with <FaHeart /> in <strong>NL</strong> - Website source on{' '}
      <a href="https://github.com/gandreadis/gandreadis.com">
        <FaGithub /> GitHub
      </a>
    </p>
    <p>
      <FaCamera /> Cover image by the great{' '}
      <a href="https://www.uva.nl/profiel/n/o/nomail/w.s.nooitgedagt.html">
        Wout Nooitgedagt
      </a>
    </p>
    <p>Copyright &copy; {new Date().getFullYear()}</p>
  </footer>
)

export default Footer
