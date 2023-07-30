import { Link } from "react-router-dom";

import Header from "../Header/Header";

function Profile() {
    return (
        <>
            <Header />
            <section className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form" noValidate>
                    <div className="profile__form-container">
                        <div className="profile__input-section">
                            <p className="profile__form-caption">Имя</p>
                            <input className="profile__input" placeholder="Виталий"></input>
                        </div>
                        <div className="profile__input-section">
                            <p className="profile__form-caption">E-mail</p>
                            <input className="profile__input" placeholder="pochta@yandex.ru"></input>
                        </div>
                    </div>
                    <button className="profile__edit-button" type="submit">Редактировать</button>
                </form>
                <Link className="profile__logout-button" to="/">Выйти из аккаунта</Link>
            </section>
        </>
    );
}

export default Profile;