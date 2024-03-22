import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher } from '../../config';
import { useEffect, useState } from 'react';
// https://api.themoviedb.org/3/movie/now_playing?api_key=9ff06afc3a041c6eda8c1560bc75e82b
const MovieList = ({ categoryMovie = 'now_playing' }) => {
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/movie/${categoryMovie}?api_key=9ff06afc3a041c6eda8c1560bc75e82b`,
        fetcher
    );
    useEffect(() => {
        data && data.results && setMovies(data.results);
    }, [data]);
    console.log(movies);

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
