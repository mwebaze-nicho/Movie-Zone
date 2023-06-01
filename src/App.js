import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";   


const App =() => {
    const [movies, setMovies] =useState([]); //creates a state to gather results array
    const [searchTerm, setSearchTerm] = useState('');
    const API_URL ='http://www.omdbapi.com?apikey=41a5caf0';
    // http://www.omdbapi.com?apikey=41a5caf0&s=$"action" this can give a json file in the browser
  

    const searchMovies = async (title1)=> {  //this will search movies from the api and takes time
        const response = await fetch (`${API_URL}&s=${title1}`); //call API for response
        const  data = await response.json(); //returns the fetched data in JSON format
        setMovies(data.Search); //this will return all the results to the user

    }
    useEffect (()=>{
        searchMovies('Love');
    }, []);
    return (
        <div className="app">
           <h1>MovieZone</h1>

           <div className="search">
            <input placeholder="Search for your favourite movies"
                value= {searchTerm}   //this allows us to searchbox to hold the name of the search
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
            />
           </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie)=>(
                                <MovieCard movie ={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                        <h2>No movies found</h2>
                        </div>
                    )
            }

           
        </div>
    );
}

export default App;