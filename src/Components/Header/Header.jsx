import React from "react";
import { useState } from "react";
import logo from './assets/Headlogo.png'
import './Style/header.css'

const NavBar = () => {
    const [currTime, SetTime] = useState(new Date().toLocaleTimeString())
    setInterval(
        () => {
            SetTime(new Date().toLocaleTimeString())
        }, 500
    )
    return (
        <>
            {/* BS Navbar */}
            <nav class="navbar navbar-expand-lg navbar-dark" id="NAVBAR" style={{ width: '100%', position: 'fixed', boxShadow: '0 5px 5px rgba(0,0,0,0.3)' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" style={{ width: '50px', height: '50px' }} /> Aditya Bagari</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold" style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page"
                                    onClick={() => {
                                        window.scrollTo(0,0)
                                    }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    document.querySelector('#SCROLLMAINWORKS').scrollIntoView()
                                }} >Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Me</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/science">Science Portfolio</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/contact">Contact Me</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="Clock">{currTime}</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { NavBar }