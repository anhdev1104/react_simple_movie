import useSWRInfinite from 'swr/infinite';
import MovieCard, { MovieCardSkeleton } from '../components/movie/MovieCard';
import { fetcher, tmdbAPI } from '../config';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Button from '../components/button/Button';
const itemsPerPage = 20;

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', page));
  const filterDebounce = useDebounce(filter, 500);
  const { data, error, size, setSize } = useSWRInfinite(index => url.replace('page=1', `page=${index + 1}`), fetcher);
  const loading = !data && !error;

  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  console.log('🚀 ~ MoviePage ~ isReachingEnd:', isReachingEnd);
  const movies = data ? data.reduce((acc, curr) => acc.concat(curr.results), []) : [];
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  console.log('🚀 ~ MoviePage ~ data:', data);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, page));
    } else {
      setUrl(tmdbAPI.getMovieList('popular', page));
    }
  }, [page, filterDebounce]);
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4  outline-none bg-slate-800 text-white"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
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

      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(8).fill(0).map((item, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading && movies.length > 0 && movies.map(item => <MovieCard key={item.id} item={item} />)}
      </div>

      <div className="flex items-center justify-center mt-10 gap-5">
        {!isReachingEnd && <Button onClick={() => setSize(size + 1)}>Load more</Button>}
      </div>
    </div>
  );
};

export default MoviePage;
