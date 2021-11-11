import React from "react";

export default function Footer() {
    return(
        <div className="footer bg-dark text-light">
            <p className="small">
                  
            All movies data are retrieved from Open Movie Data Base API. <br />
            Visit <a href="http://www.omdbapi.com/" target="_blank">OMDB</a>
                <br />
            <p> Version 1.0 with TMDB API <a href="https://arifian853.github.io/GDSC-movie-info/" target="_blank">Here</a> </p>
            </p>
            <hr />
            Copyright © Arifian Saputra, 2021. All rights reserved.
            <br />
            Made for GDSC Front End Development workshop project assignment.
            <br />
            <a href="https://gdsc.community.dev/institut-teknologi-bandung/" target="_blank"><img class="footer-icon" src="./GDSC Vertical.svg" alt="" /></a>
        </div>
    );
}