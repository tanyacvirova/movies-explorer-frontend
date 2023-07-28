function Footer() {
    return (
        <footer className="footer">
            <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">&copy; 2023</p>
                <nav className="footer__nav-container">
                    <a className="footer__navlink" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__navlink" href="https://github.com/tanyacvirova" target="_blank" rel="noreferrer">Github</a>
                </nav>
            </div>
        </footer>
    );
}
export default Footer;