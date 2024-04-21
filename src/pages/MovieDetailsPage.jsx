import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../components/movie/MovieCard';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="page-container pb-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[600px] max-w-[460px] mx-auto -mt-[300px] z-10 relative pb-10">
        <img
          src={`https://images.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <h1 className="text-center text-3xl font-bold mb-10 text-white">{title}</h1>
      {genres.length > 0 && (
        <div className="flex justify-center items-center gap-x-5 mb-10">
          {genres.map(item => (
            <span className="py-2 px-4 border-primary border text-primary rounded" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed mx-auto max-w-[600px] mb-10">{overview}</p>
      <MovieVideos />
      <MovieCredits />
      <MovieSimilar />
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`, fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-5 font-bold uppercase">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map(item => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://images.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg"
            />
            <h3 className="text-xl text-center font-medium mt-3">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`, fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  const movie = results.find(item => item.name === 'Official Trailer');

  return (
    <div className="py-10">
      <div className="w-full aspect-video">
        <iframe
          width="914"
          height="514"
          src={`https://www.youtube.com/embed/${movie?.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full object-fill"
        ></iframe>
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`, fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={'true'} spaceBetween={20} slidesPerView={'auto'}>
          {results.length > 0 &&
            results.map(item => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
