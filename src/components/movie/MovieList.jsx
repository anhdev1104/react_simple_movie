import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
import { useEffect, useState } from 'react';

const MovieList = ({ categoryMovie = 'now_playing' }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(tmdbAPI.getMovieList(categoryMovie), fetcher);
  useEffect(() => {
    data && data.results && setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={'true'} spaceBetween={20} slidesPerView={'auto'}>
        {movies.length > 0 &&
          movies.map(item => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
