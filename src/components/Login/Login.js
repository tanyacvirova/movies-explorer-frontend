import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";

function Login(props) {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [isValid, setIsValid] = useState(false);
    const [isActiveButtonStatus, setisActiveButtonStatus] = useState(false);
    const reEmail = '[\\w\\-.]+@[\\w\\-.]+\\.[a-zA-Z]{2,5}';
    
    useEffect(() => {
        isValid ? setisActiveButtonStatus(true) : setisActiveButtonStatus(false);
    }, [isValid]);

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
        props.onLogInButton(values);
        setValues({ email: '', password: '' });
        setErrors({ email: '', password: '' });
        setIsValid(false);
        setisActiveButtonStatus(false);
    }

    return (
        <>
            <FormHeader title={"Рады видеть!"} />
            <form className="form" noValidate onSubmit={handleSubmit}>
                <div className="form__inputs">
                    <FormInput
                        id={"email"}
                        type={"email"}
                        value={values.email}
                        onInputChange={handleInputChange}
                        errorMessage={errors.email}
                        label={"E-mail"}
                        pattern={reEmail} />
                    <FormInput
                        id={"password"}
                        type={"password"}
                        value={values.password}
                        onInputChange={handleInputChange}
                        errorMessage={errors.password}
                        label={"Пароль"} />
                </div>
                <FormSubmitButton
                    text={'Войти'}
                    status={isActiveButtonStatus} />
            </form>
            <div className="caption">
                <p className="caption__text">Ещё не зарегистрированы?</p>
                <Link className="caption__link" to='/signup'>Регистрация</Link>
            </div>
        </>
    );
}

export default Login;