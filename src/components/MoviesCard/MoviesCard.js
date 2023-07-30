function MoviesCard(props) {
    const currentLocation = window.location.pathname;

    return (
        <div className="card">
            <div className="card__about">
                <div className="card__textbox">
                    <p className="card__title">{props.card.title}</p>
                    <p className="card__duration">{props.card.duration}</p>
                </div>
                {(currentLocation === '/movies') && <button className={props.card.isLiked ? "card__like card__like_on" : "card__like card__like_off"} />}
                {(currentLocation === '/saved-movies') && <button className="card__delete-button" />}
            </div>
            <img className="card__cover" src={props.card.image} alt={`Обложка фильма "${props.card.title}"`} />
        </div>
    );
}

export default MoviesCard;