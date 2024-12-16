import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
            <Link to="/" style={{ marginRight: "10px" }}>
                Home
            </Link>
            <Link to="/about" style={{ marginRight: "10px" }}>
                About
            </Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar