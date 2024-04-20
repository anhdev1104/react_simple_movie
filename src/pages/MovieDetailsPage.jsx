import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path } = data;
  return (
    <>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -translate-y-2/4">
        <img
          src={`https://images.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default MovieDetailsPage;
