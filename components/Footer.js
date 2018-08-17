import React from 'react';

export default () => (
    <footer className="footer has-background-info has-text-light">
        <div className="content has-text-centered">
            <p>
                Built with <i className="fa fa-heart"/> in <strong className="has-text-light">NL</strong> -
                Website source on <a href="https://github.com/gandreadis/gandreadis.com" className="has-text-light">
                <i className="fa fa-github"/> GitHub</a>
            </p>
            <p>
                Copyright &copy; { (new Date()).getFullYear() }
            </p>
        </div>
    </footer>
)
