import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { apiKey, fetcher } from '../config';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from 'react-paginate';
const itemsPerPage = 20;

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  const filterDebounce = useDebounce(filter, 500);
  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;
  const movies = data?.results || [];

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const pageCount = Math.ceil(data?.total_results / itemsPerPage);

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&page=${page}&api_key=${apiKey}`);
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${apiKey}`);
    }
  }, [page, filterDebounce]);

  console.log(page);

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
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 animate-spin mx-auto"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading && movies.length > 0 && movies.map(item => <MovieCard key={item.id} item={item} />)}
      </div>

      <div className="flex items-center justify-center mt-10 gap-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          }
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
