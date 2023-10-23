import React from "react";

const url = `https://image.tmdb.org/t/p/w300`

function MovieRow({ title, list }) {
    return (
        <div>
            <h2> {title} </h2>
            <div className="movie-row--listarea">
                {list.results.length > 0 && list.results.map((item, key)=>(
                    <img src={`${url}${item.poster_path}`} alt="movie poster"></img>
                ))}
            </div>
        </div>
    )
}


export default MovieRow;