import { Fragment, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'swiper/scss';
import Main from './components/layout/Main';
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePageV2 = lazy(() => import('./pages/MoviePageV2'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/movie" element={<MoviePageV2 />}></Route>
            <Route path="/movie/:movieId" element={<MovieDetailsPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
