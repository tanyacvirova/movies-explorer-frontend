import { Link, NavLink } from 'react-router-dom';

import profileIcon from '../../images/header_icon_profile.svg';


function Navigation(props) {
    return (
        (props.isVisibleNavBar) && <section className="navigation">
            <div className="navigation__container">
                <div className="navigation__nav-container">
                    <button className='navigation__close-button' onClick={props.closeNavBar} />
                    <nav className='navigation__links'>
                        <NavLink to="/" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} onClick={props.closeNavBar} >Главная</NavLink>
                        <NavLink to="/movies" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} onClick={props.closeNavBar}>Фильмы</NavLink>
                        <NavLink to="/saved-movies" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} onClick={props.closeNavBar}>Сохранённые фильмы</NavLink>
                    </nav>
                </div>
                <Link to="/profile" className='navigation__nav-link' onClick={props.closeNavBar}>
                    <button className='navigation__account-button'><img className='navigation__button-icon' src={profileIcon} alt="Иконка аккаунта." />Аккаунт</button>
                </Link>
            </div>
        </section>
    );
}
export default Navigation;