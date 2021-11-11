import React from "react";

const MovieList = (props) => {
    const FavouritesComponent = props.favouritesComponent;

    return(
        <> 
            {props.movies.map((movie, index)=> 
                    <div className="movie-component">
                        <div className="image-container">
                            <img className="img-poster" src={movie.Poster} alt="Movie Poster" />
                            <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-start">
                                <FavouritesComponent />
                            </div>
                        </div>
                        <br />
                          <div className="title-area">
                            <h4>{movie.Title}</h4>
                            <p>Year : {movie.Year}</p>
                            <p>Type : {movie.Type}</p>
                          </div>
                    </div>
            )}
        </>
    );
}

export default MovieList;