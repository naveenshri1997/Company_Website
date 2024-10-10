import bgimage from '../assets/11.jpeg';
import logo from '../assets/black_logo.png';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    });

    return (
        <>
         
            <nav className={`headerMain ${scroll ? "navbar navbar-expand-lg navbar-expand-md position_absolute navbar_custom " : "navbar navbar-expand-lg navbar-expand-md position_absolute  "}`} 
                 >
                <div class="container-fluid">                   
                    <Link class="mobile_logo navbar-brand londrina" to="/"><img src={logo} className="img-fluid" width="50px" /> White<span style={{ color: '#f84525' }}>Web </span><span className="mobile_logo_sub">Tech</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About Us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul class="dropdown-menu">
                                    <Link class="dropdown-item" to="/webdev">Web Development</Link>
                                    <Link class="dropdown-item" to="/mobiledev">Mobile Development</Link>
                                    <Link class="dropdown-item" to="/uiux">UI/UX Development</Link>
                                    
                                </ul>
                            </li>
                                                      
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/career'>Career</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contactpage">Contact Us</Link>
                            </li>
                        </ul>
                      
                    </div>
                </div>
                
            </nav>
        </>
    )
}
export default Navbar
