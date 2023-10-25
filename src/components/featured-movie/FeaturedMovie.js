import React from "react";
import './FeaturedMovie.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    return (
        <section className="featured">
            <div> {item.title} </div>
        </section>
    )
}