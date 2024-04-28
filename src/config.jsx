export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const apiKey = '9ff06afc3a041c6eda8c1560bc75e82b';

const tmdbEndpoint = 'https://api.themoviedb.org/3/movie';
const tmdbEndpointSearch = 'https://api.themoviedb.org/3/search/movie';

export const tmdbAPI = {
  getMovieList: (type, page = 1) => `${tmdbEndpoint}/${type}?page=${page}&api_key=${apiKey}`,
  getMovieDetails: movieId => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page) => `${tmdbEndpointSearch}?query=${query}&page=${page}&api_key=${apiKey}`,
};
