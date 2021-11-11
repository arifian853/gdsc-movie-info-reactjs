import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

export default function Navbar() {
    return(
        <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">MovieInfo.com <img className="nav-logo" src="./movie-reel.png" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active bg-dark" aria-current="page" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active bg-dark" aria-current="page" href="https://arifian853.github.io/" target="_blank">Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active bg-dark" aria-current="page" href="https://github.com/arifian853/gdsc-movie-app-react" target="_blank">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active bg-dark" aria-current="page" href="https://github.com/arifian853" target="_blank">Github</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="https://www.facebook.com/arifian.syaputra.9/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a class="dropdown-item" href="https://www.instagram.com/arifiansaputra_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a class="dropdown-item" href="https://twitter.com/ArifianSaputra1" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/in/arifian-saputra-08135a178/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
       </div>
    );
}