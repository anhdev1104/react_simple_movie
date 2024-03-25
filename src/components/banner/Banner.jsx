import useSWR from 'swr';
import { fetcher } from '../../config';
import { SwiperSlide, Swiper } from 'swiper/react';

const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=9ff06afc3a041c6eda8c1560bc75e82b`,
        fetcher
    );

    const movies = data?.results || [];

    return (
        <section className="banner page-container h-[500px] mb-20">
            <Swiper grabCursor={true} slidesPerView={'auto'}>
                {movies.length > 0 &&
                    movies.map(item => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

function BannerItem({ item }) {
    const { backdrop_path } = item;

    return (
        <div className="w-full h-full rounded-lg bg-white relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] bg-opacity-10 rounded-lg"></div>
            <img
                src={`https://images.tmdb.org/t/p/original/${backdrop_path}`}
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
    );
}

export default Banner;
