import React from "react";
import './MovieRow.scss';

const url = `https://image.tmdb.org/t/p/w300`

function MovieRow({ title, list }) {
    return (
        <div className="movie-row">
            <h2> {title} </h2>
            <div className="movie-row--listarea">
                <div className="movie-row__list">
                    {list.results.length > 0 && list.results.map((item, key) => (
                        <div key={key} className="movie-row__list--item">
                            <img src={`${url}${item.poster_path}`} alt="movie poster"></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default MovieRow;