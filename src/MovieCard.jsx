import React from "react";

//this to simplify the code and make adding movies easier
const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div> 

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
                <h3>{movie.Url}</h3>
            </div>

        </div>
    )
}

export default MovieCard;