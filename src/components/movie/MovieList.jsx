import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard, { MovieCardSkeleton } from './MovieCard';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
import { useEffect, useState } from 'react';

const MovieList = ({ categoryMovie = 'now_playing' }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbAPI.getMovieList(categoryMovie), fetcher);
  const isLoading = !data && !error;
  useEffect(() => {
    data && data.results && setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list">
      {isLoading && (
        <Swiper grabCursor={'true'} spaceBetween={20} slidesPerView={'auto'}>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
        </Swiper>
      )}
      {!isLoading && (
        <Swiper grabCursor={'true'} spaceBetween={20} slidesPerView={'auto'}>
          {movies.length > 0 &&
            movies.map(item => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default MovieList;
