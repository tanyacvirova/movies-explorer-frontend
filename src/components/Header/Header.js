import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const currentLocation = window.location.pathname;
    const navigate = useNavigate();

    return (
        <>
            {(currentLocation === '/') &&
                <header className='header header_color'>
                    <Link className="header__logo" to="/" />
                    <nav className='header__navmenu'>
                        <Link className='header__navlink header__navlink_active' to="/signup">Регистрация</Link>
                        <button className='header__login-button' type="button" onClick={() => navigate('/signin')}>Войти</button>
                    </nav>
                </header>}
            {((currentLocation === '/movies') || (currentLocation === '/saved-movies') || (currentLocation === '/profile')) &&
                <header className='header'>
                    <Link className="header__logo" to="/" />
                    <div className='header__menu-container'>
                        <nav className='header__navmenu'>
                            <NavLink to="/movies" className={({isActive}) => `header__navlink ${isActive ? "header__navlink_active" : ""}`}>Фильмы</NavLink>
                            <NavLink to="/saved-movies" className={({isActive}) => `header__navlink ${isActive ? "header__navlink_active" : ""}`}>Сохранённые фильмы</NavLink>
                        </nav>
                        <Link to="/profile" className='header__account-button'>
                            <div className='header__account-button-icon'/>
                            <p className='header__account-button-text'>Аккаунт</p>
                        </Link>
                    </div>
                    <button className='header__navmenu-button'></button>
                </header>}
        </>
    );
}
export default Header;