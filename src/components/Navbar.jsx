import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">Qatar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
