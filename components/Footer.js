import React from 'react';

export default () => (
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                Built with <i className="fa fa-heart"/> in <strong>NL</strong> - Source on <a
                href="https://github.com/gandreadis/gandreadis.com"><i className="fa fa-github"/> GitHub</a>
            </p>
            <p>
                Copyright &copy; { (new Date()).getFullYear() }
            </p>
        </div>
    </footer>
)
