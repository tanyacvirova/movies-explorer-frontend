function AboutProject() {
    return (
        <section className="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__2-col">
                <div className="about__column">
                    <p className="about__col-title">Дипломный проект включал 5 этапов</p>
                    <p className="about__col-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__column">
                    <p className="about__col-title">На выполнение диплома ушло 5 недель</p>
                    <p className="about__col-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__5-col">
                <div className="about__grid about__grid_accent">
                    <p className="about__col-text about__col-text_white">1 неделя</p>
                </div>
                <div className="about__grid">
                    <p className="about__col-text">4 недели</p>
                </div>
                <p className="about__col-caption">Back-end</p>
                <p className="about__col-caption">Front-end</p>
            </div>
        </section>
    );
}
export default AboutProject;