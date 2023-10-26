import React, { useState } from "react";
import './MovieRow.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const url = `https://image.tmdb.org/t/p/w300`;

function MovieRow({ title, list }) {
    const [scrollX, setScrollX] = useState(0);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => { 
        let x = scrollX - Math.round(window.innerWidth / 2);
        const listWidth =  list.results.length * 150;
        if(window.innerWidth - listWidth > x) {
            x = window.innerWidth - listWidth - 60;
        }
        setScrollX(x)
    }
    return (
        <div className="movie-row">
            <h2> {title} </h2>
            <div className="movie-row--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movie-row--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movie-row--listarea">
                <div className="movie-row__list" style={{
                    marginLeft: scrollX,
                    width: list.results.length * 150
                }}>
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