import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-white">
                <div className="container">
                    {/* Brand (optional) */}
                    <a className="navbar-brand text-black fw-bold" href="#">Portfolio</a>

                    {/* Navbar Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact'].map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <a
                                        className="nav-link text-black fw-medium hover-effect"
                                        href={`#${item.toLowerCase()}`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Custom Hover Effect Styling */}
            <style>{`
                .hover-effect {
                    position: relative;
                    transition: color 0.3s ease;
                }
                .hover-effect:hover {
                    color: #0d6efd !important; /* Bootstrap Blue */
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Navbar;