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

      <footer>
        Feito com <span row='img' aria-label='coração'>♡</span> por Caio Santoss <br />
        Direitos de imagem para Netflix <br />
        Dados pegos do site themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2240,c_limit/Netflix_LoadTime.gif" alt="netflix-loading"></img>
        </div>
      }
    </div>
  );
}