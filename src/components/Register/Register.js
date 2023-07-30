import { Link } from "react-router-dom";

import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";


function Register() {
    return (
        <>
            <FormHeader title={"Добро пожаловать!"} />
            <form className="form" noValidate>
                <div className="form__inputs">
                    <FormInput id={"name"} type={"text"} label={"Имя"} placeholder={"Виталий"} />
                    <FormInput id={"email"} type={"email"} label={"E-mail"} placeholder={"pochta@yandex.ru|"} />
                    <FormInput id={"pwd"} type={"password"} label={"Пароль"} placeholder={"••••••••••••••"} />
                </div>
                <FormSubmitButton text={'Зарегистрироваться'}></FormSubmitButton>
            </form>
            <div className="caption">
                <p className="caption__text">Уже зарегистрированы?</p>
                <Link className="caption__link" to='/signin'>Войти</Link>
            </div>
        </>
    );
}

export default Register;