import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";


function Register(props) {
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    const [isValid, setIsValid] = useState(false);
    const [isActiveButtonStatus, setisActiveButtonStatus] = useState(false);

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
        props.onSignUpButton(values);
        setValues({ name: '', email: '', password: '' });
        setErrors({ name: '', email: '', password: '' });
        setIsValid(false);
        setisActiveButtonStatus(false);
    }

    return (
        <>
            <FormHeader title={"Добро пожаловать!"} />
            <form className="form" noValidate onSubmit={handleSubmit}>
                <div className="form__inputs">
                    <FormInput
                        id={"name"}
                        type={"text"}
                        label={"Имя"}
                        value={values.name}
                        onInputChange={handleInputChange}
                        errorMessage={errors.name}
                        pattern='[a-zA-zА-Яа-я\- ]*'
                    />
                    <FormInput
                        id={"email"}
                        type={"email"}
                        label={"E-mail"}
                        value={values.email}
                        onInputChange={handleInputChange}
                        errorMessage={errors.email}
                    />
                    <FormInput
                        id={"password"}
                        type={"password"}
                        label={"Пароль"}
                        value={values.password}
                        onInputChange={handleInputChange}
                        errorMessage={errors.password}
                    />
                </div>
                <FormSubmitButton
                    text={'Зарегистрироваться'}
                    status={isActiveButtonStatus}
                />
            </form>
            <div className="caption">
                <p className="caption__text">Уже зарегистрированы?</p>
                <Link className="caption__link" to='/signin'>Войти</Link>
            </div>
        </>
    );
}

export default Register;