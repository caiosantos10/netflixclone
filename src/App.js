import React, { useEffect, useState } from 'react';
import './App.scss';
import Tmdb from './Tmdb';
import MovieRow from './components/movie-row/MovieRow';
import FeaturedMovie from './components/featured-movie/FeaturedMovie';
import Header from './components/header/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // fetching all
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //fetching featured movie
      let originals = list.filter(i => i.slug === 'originals');
      let index = Math.floor(Math.random() * originals[0].items.results.length - 1);
      let chosen = originals[0].items.results[index];
      let chosenDetails = await Tmdb.getMovieById(chosen.id, 'tv');

      setFeaturedMovie(chosenDetails)
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false);
    }

    window.addEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className='page'>
      <Header black={blackHeader} />

      {featuredMovie && <FeaturedMovie item={featuredMovie} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} list={item.items} />
        ))}
      </section>

    </div>
  );
}