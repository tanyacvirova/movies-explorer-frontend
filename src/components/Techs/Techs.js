function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <p className="techs__big-number">7 технологий</p>
            <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__grid-container">
                <div className="techs__block">HTML</div>
                <div className="techs__block">CSS</div>
                <div className="techs__block">JS</div>
                <div className="techs__block">React</div>
                <div className="techs__block">Git</div>
                <div className="techs__block">Express.js</div>
                <div className="techs__block">mongoDB</div>
            </div>
        </section>
    );
}
export default Techs;