import React, { useEffect, useState } from 'react';
import './App.scss';
import Tmdb from './Tmdb';
import MovieRow from './components/movie-row/MovieRow';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} list={item.items}/>
        ))}
      </section>

    </div>
  );
}