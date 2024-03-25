import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
    console.log(data);
    return (
        <img
            src={`https://images.tmdb.org/t/p/original/${data?.poster_path}`}
            alt=""
            className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
    );
};

export default MovieDetailsPage;
