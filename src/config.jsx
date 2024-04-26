export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const apiKey = '9ff06afc3a041c6eda8c1560bc75e82b';

const tmdbEndpoint = 'https://api.themoviedb.org/3/movie';

export const tmdbAPI = {
  getMovieList: type => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: movieId => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
};
