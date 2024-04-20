import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="pb-10">
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
      <p className="text-center leading-relaxed mx-auto max-w-[600px]">{overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
