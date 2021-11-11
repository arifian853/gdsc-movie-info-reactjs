import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Navbar from './Navbar';
import MovieList from './MovieList';
import Footer from './Footer';
import SearchBox from './SearchBox';
import AddFavourites from './AddToFavourites';
import RemoveFavourites from './RemovingFavs';

function App() {
  const [ movies, setMovies] = useState([
  {
      "Title": "Venom: Let There Be Carnage",
      "Year": "2021",
      "imdbID": "tt7097896",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
  },
  {
      "Title": "Dune",
      "Year": "2021",
      "imdbID": "tt1160419",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Eternals",
    "Year": "2021",
    "imdbID": "tt9032400",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg"
  },
  {
    "Title": "Free Guy",
    "Year": "2021",
    "imdbID": "tt6264654",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "The Addams Family 2",
    "Year": "2021",
    "imdbID": "tt11125620",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQ5NzJjMDgtNzhjMC00NTQ2LTgzOTUtZThiMWMwYmYwMGYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Halloween Kills",
    "Year": "2021",
    "imdbID": "tt10665338",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2RmMGY2Y2UtNjA1NS00NGE4LThiNzItMmE1NTk5NzI5NmE0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
  },
  {
    "Title": "Kimetsu no Yaiba: Mugen Ressha-Hen",
    "Year": "2020",
    "imdbID": "tt11032374",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg"
  },
  ]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=${searchValue}=&apikey=a5368bc6`;

  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

useEffect(() => {
  getMovieRequest(searchValue);
},[searchValue])

useEffect(() => {
  const movieFavourites = JSON.parse(localStorage.getItem('movie-app-favs-react')
  );
  setFavourites(movieFavourites);
}, []);

const AddCookies = (items) => {
  localStorage.setItem('movie-app-favs-react', JSON.stringify(items));
}

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie]; 
  setFavourites(newFavouriteList);
  AddCookies(newFavouriteList);
}

const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourites) => favourites.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
};

  return (
    <div>
      <header className="App-header">
       <Navbar />
       <div className="banner">
            <br />
            <h1 class="logo-main"> <span class="title-1">Movie</span><span class="title-2">Info</span>.com <img class="title-logo" src="./movie-reel.png" alt="Logo" /></h1>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            <br />
            <h2 align="center" className="greeting">Movies for you to discover !</h2>
            <br />
            <button className="accordion">Favourites &#x25BC;</button>
            <div className="panel">
                <br />
                <h4 align="center">My Favourites</h4>
                <div id="fav">
                <MovieList movies={favourites} 
                       handleFavouritesClick={removeFavouriteMovie} 
                       favouritesComponent={RemoveFavourites} />
                </div>
                <br />
            </div>
        </div>
      </header>
      <body>
        <div className="main-body">
          
          <div className="row-wrapper">
            <MovieList movies={movies} 
                       handleFavouritesClick={addFavouriteMovie} 
                       favouritesComponent={AddFavourites} />
          </div>
        </div>
        <div class="cookies-info">This sites uses cookies.</div>
      </body>
      <Footer />
    </div>
  );
}
export default App;