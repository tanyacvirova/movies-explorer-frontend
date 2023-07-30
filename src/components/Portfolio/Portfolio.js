function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <a className="portfolio__link" href="https://github.com/tanyacvirova/how-to-learn" target="_blank" rel="noreferrer">
                <p className="portfolio__link-text">Статичный сайт</p>
                <p className="portfolio__link-text">↗</p>
            </a>
            <a className="portfolio__link" href="https://tanyacvirova.github.io/russian-travel/" target="_blank" rel="noreferrer">
                <p className="portfolio__link-text">Адаптивный сайт</p>
                <p className="portfolio__link-text">↗</p>
            </a>
            <a className="portfolio__link" href="https://mestoproject.tanyacvirova.nomoreparties.sbs/" target="_blank" rel="noreferrer">
                <p className="portfolio__link-text">Одностраничное приложение</p>
                <p className="portfolio__link-text">↗</p>
            </a>
        </section>
    );
}
export default Portfolio;