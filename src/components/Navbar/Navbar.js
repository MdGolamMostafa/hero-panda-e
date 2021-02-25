import React from 'react';
import logo from '../images/logo.png';
const Navbar = () => {
    return (
        <nav class="navbar mb-5 navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={logo} alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Shoes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Backpack</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " href="#" >Contact us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;