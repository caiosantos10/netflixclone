import React from "react";
import './FeaturedMovie.scss';

const imagePath = `https://image.tmdb.org/t/p/original`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imagePath}${item.backdrop_path})`
        }}>
            <div className="featured--vertical-fade"> </div>
        </section>
    )
}