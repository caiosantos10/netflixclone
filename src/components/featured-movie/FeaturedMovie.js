import React from "react";
import './FeaturedMovie.scss';

const imagePath = `https://image.tmdb.org/t/p/original`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    const date = new Date(item.first_air_date);
    const genres = item.genres.map(gender => {
        return gender.name
    });
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imagePath}${item.backdrop_path})`
        }}>
            <div className="featured--vertical-fade">
                <div className="featured--horizontal-fade">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured__info">
                        <div className="featured__info--points">{item.vote_average.toFixed(1) * 10}%</div>
                        <div className="featured__info--year">{date.getFullYear()}</div>
                        <div className="featured__info--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured__buttons"></div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}