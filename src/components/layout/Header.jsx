import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header flex items-center justify-center gap-5 text-white py-10 mb-5">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
                Home
            </NavLink>
            <NavLink to="/movie" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
                Movie
            </NavLink>
        </header>
    );
};

export default Header;
