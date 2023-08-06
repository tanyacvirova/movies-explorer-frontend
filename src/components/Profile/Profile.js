import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile(props) {
    const user = useContext(CurrentUserContext);
    const [values, setValues] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({ name: '', email: '' });
    const [isValid, setIsValid] = useState(false);
    const [isActiveButtonStatus, setisActiveButtonStatus] = useState(false);

    useEffect(() => {
        setValues({ name: user.name, email: user.email });
    }, [user]);

    useEffect(() => {
        if (((values.name !== user.name) || (values.email !== user.email)) && isValid) {
            setisActiveButtonStatus(true);
        } else {
            setisActiveButtonStatus(false);
        }
    }, [values, user, isValid]);

    function handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onEditButton(values);
        setErrors({ name: '', email: '' });
        setIsValid(false);
        setisActiveButtonStatus(false);
    }

    return (
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                onNavBarClick={props.onNavBarClick}
            />
            <section className="profile">
                <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__form-container">
                        <div className="profile__input-section">
                            <p className="profile__form-caption">Имя</p>
                            <input
                                className="profile__input"
                                name='name'
                                type='text'
                                value={values.name}
                                onChange={handleInputChange}
                                required
                                minLength={2}
                                maxLength={30}
                                pattern='[a-zA-zА-Яа-я\- ]*'>
                            </input>
                        </div>
                        <label className="profile__error-message">{errors.name}</label>
                        <div className="profile__input-section">
                            <p className="profile__form-caption">E-mail</p>
                            <input
                                className="profile__input"
                                type='email'
                                required
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                        <label className="profile__error-message">{errors.email}</label>
                    </div>
                    <span className={props.statusEditProfile.status === "OK" ? "profile__response-status profile__response-status_ok" : "profile__response-status"}>{props.statusEditProfile.message}</span>
                    <button
                        className={isActiveButtonStatus ? "profile__edit-button" : "profile__edit-button profile__edit-button_disabled"}
                        type="submit"
                        disabled={isActiveButtonStatus ? "" : "disabled"}>
                        Редактировать
                    </button>
                </form>
                <button className="profile__logout-button" type="button" onClick={props.logOut}>Выйти из аккаунта</button>
            </section>
            <Navigation
                isVisibleNavBar={props.isVisibleNavBar}
                closeNavBar={props.closeNavBar}
            />
        </>
    );
}

export default Profile;