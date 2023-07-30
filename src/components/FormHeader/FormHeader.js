import { Link } from "react-router-dom";

function FormHeader(props) {
    return (
        <header className="form-header">
            <Link className="form-header__logo" to="/" />
            <h1 className='form-header__title'>{props.title}</h1>
        </header>
    );
}

export default FormHeader;