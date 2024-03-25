import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';

const MoviePage = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/popular?api_key=9ff06afc3a041c6eda8c1560bc75e82b`,
        fetcher
    );
    const movies = data?.results || [];
    return (
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input
                        type="text"
                        className="w-full p-4  outline-none bg-slate-800 text-white"
                        placeholder="Type here to search ..."
                    />
                </div>
                <button className="p-4 bg-primary text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-4 gap-10">
                {movies.length > 0 && movies.map(item => <MovieCard key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default MoviePage;
