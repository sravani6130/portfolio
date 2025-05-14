import React from 'react';
import { Link } from 'react-router-dom'; // use Link from React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand text-black fw-bold" to="/">
                        Portfolio
                    </Link>

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
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-medium hover-effect" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-medium hover-effect" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-medium hover-effect" to="/skills">
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* Resume Link */}
                                <a
                                    className="nav-link text-black fw-medium hover-effect"
                                    href="https://sravani6130.github.io/portfolio/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hover effect styling */}
            <style>{`
                .hover-effect {
                    position: relative;
                    transition: color 0.3s ease;
                }
                .hover-effect:hover {
                    color: #0d6efd !important;
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Navbar;
