import portrait from '../../images/about-me_portrait.png';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className='about-me__container'>
                <div className="about-me__profile">
                    <div className='about-me__textbox'>
                        <p className="about-me__name">Виталий</p>
                        <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
                            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании «СКБ Контур». После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                    </div>
                    <a className='about-me__link' href='https://github.com/tanyacvirova' target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__photo" alt="Портрет студента." src={portrait} />
            </div>
        </section>
    );
}
export default AboutMe;