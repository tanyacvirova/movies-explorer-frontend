import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__caption">Страница не найдена</p>
            </div>
            <button className="not-found__link" onClick={() => navigate(-1, { replace: true })}>Назад</button>
        </section>
    );
}

export default NotFound;