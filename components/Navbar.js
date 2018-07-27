import React from 'react';

class Navbar extends React.Component {
    componentDidMount() {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }

    render() {
        return (
            <nav className="navbar is-fixed-top is-info">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        Georgios Andreadis
                    </a>
                    <div className="navbar-burger burger" data-target="myNavbar">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>

                <div id="myNavbar" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="#publications">
                            Publications
                        </a>
                        <a className="navbar-item" href="#projects">
                            Projects
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar
