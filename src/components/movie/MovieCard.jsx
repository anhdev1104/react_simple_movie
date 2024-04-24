import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const MovieCard = ({ item }) => {
  const { id, poster_path, original_title, release_date, vote_average } = item;
  const navigate = useNavigate();

  return (
    <div className="movie-card flex flex-col rounded-xl p-3 bg-slate-800 text-white select-none">
      <img
        src={`https://images.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 whitespace-nowrap overflow-hidden overflow-ellipsis">{original_title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <div className="flex gap-3 items-center">
            <span>{vote_average}</span>
            <span>
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.23521 0.586857L6.08247 4.94892L1.26601 5.65067C0.402277 5.77586 0.0561252 6.84002 0.682496 7.44952L4.16709 10.843L3.34292 15.6366C3.19457 16.5031 4.10775 17.1521 4.87258 16.7469L9.18136 14.4835L13.4901 16.7469C14.255 17.1488 15.1681 16.5031 15.0198 15.6366L14.1956 10.843L17.6802 7.44952C18.3066 6.84002 17.9604 5.77586 17.0967 5.65067L12.2802 4.94892L10.1275 0.586857C9.74179 -0.190669 8.62421 -0.200553 8.23521 0.586857Z"
                  fill="#FEC806"
                />
              </svg>
            </span>
          </div>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)} bgColor="primary">
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
