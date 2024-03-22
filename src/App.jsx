import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import MovieList from './components/movie/MovieList';

function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-5 text-white py-10 mb-5">
                <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')}>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')}>Movie</NavLink>
            </header>
            <section className="banner page-container h-[500px] mb-20">
                <div className="w-full h-full rounded-lg bg-white relative">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] bg-opacity-10 rounded-lg"></div>
                    <img
                        src="https://helios-i.mashable.com/imagery/articles/033kBmLCuB3k8dcc8kpMftI/hero-image.fill.size_1248x702.v1623370357.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
                        <div className="flex items-center gap-5 mb-8">
                            <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
                            <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
                            <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
                        </div>
                        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">Wacth Now</button>
                    </div>
                </div>
            </section>
            <section className="movie-layout page-container pb-20">
                <h2 className="capitalize mb-8 text-3xl font-bold text-white">Now playing</h2>
                <MovieList categoryMovie="now_playing"></MovieList>
            </section>
            <section className="movie-layout page-container pb-20">
                <h2 className="capitalize mb-8 text-3xl font-bold text-white">Top rated movie</h2>
                <MovieList categoryMovie="top_rated"></MovieList>
            </section>
            <section className="movie-layout page-container pb-20">
                <h2 className="capitalize mb-8 text-3xl font-bold text-white">Trending movie</h2>
                <MovieList categoryMovie="upcoming"></MovieList>
            </section>
        </Fragment>
    );
}

export default App;
