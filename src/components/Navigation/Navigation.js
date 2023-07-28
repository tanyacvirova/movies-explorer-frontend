import { NavLink } from 'react-router-dom';

import profileIcon from '../../images/header_icon_profile.svg';


function Navigation() {
    return (
        <section className="navigation">
            <div className="navigation__container">
                <div className="navigation__nav-container">
                    <button className='navigation__close-button'/>
                    <nav className='navigation__links'>
                        <NavLink to="/" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Главная</NavLink>
                        <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink>
                        <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Сохранённые фильмы</NavLink>
                    </nav>
                </div>
                <button className='navigation__account-button'><img className='navigation__button-icon' src={profileIcon} alt="Иконка аккаунта." />Аккаунт</button>
            </div>
        </section>
    );
}
export default Navigation;