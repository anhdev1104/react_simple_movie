import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'swiper/scss';
import Main from './components/layout/Main';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movie" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
