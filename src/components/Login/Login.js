import { Link } from "react-router-dom";

import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";

function Login() {
    return (
        <>
            <FormHeader title={"Рады видеть!"} />
            <form className="form" noValidate>
                <div className="form__inputs">
                    <FormInput id={"email"} type={"email"} label={"E-mail"} placeholder={"pochta@yandex.ru|"} />
                    <FormInput id={"pwd"} type={"password"} label={"Пароль"} placeholder={"••••••••••••••"} />
                </div>
                <FormSubmitButton text={'Войти'}></FormSubmitButton>
            </form>
            <div className="caption">
                <p className="caption__text">Ещё не зарегистрированы?</p>
                <Link className="caption__link" to='/signup'>Регистрация</Link>
            </div>
        </>
    );
}

export default Login;