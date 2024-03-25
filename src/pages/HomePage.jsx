import Banner from '../components/banner/Banner';
import MovieList from '../components/movie/MovieList';

const HomePage = () => {
    return (
        <>
            <Banner />
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
        </>
    );
};

export default HomePage;
