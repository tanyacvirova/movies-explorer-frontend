function MoviesCard(props) {
    const currentLocation = window.location.pathname;

    let isLiked;
    if (currentLocation === '/movies') {
        isLiked = props.savedMovies.some(function (item) {
            return item.nameRU === props.card.nameRU;
        });
    }

    function duration(time) {
        return `${Math.floor(time / 60)}ч${((time % 60) > 0) ? ` ${time % 60}м` : ''}`;
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <div className="card">
            <div className="card__about">
                <div className="card__textbox">
                    <p className="card__title">{props.card.nameRU}</p>
                    <p className="card__duration">{duration(props.card.duration)}</p>
                </div>
                {(currentLocation === '/movies') && <button className={isLiked ? "card__like card__like_on" : "card__like card__like_off"} onClick={handleLikeClick} />}
                {(currentLocation === '/saved-movies') && <button className="card__delete-button" onClick={handleDeleteClick} />}
            </div>
            <a className="card__cover-link" href={props.card.trailerLink} target="_blank" rel="noreferrer"><img className="card__cover" src={(currentLocation === '/movies') ? `https://api.nomoreparties.co/${props.card.image.url}` : props.card.image} alt={`Обложка фильма "${props.card.nameRU}"`} /></a>
        </div>
    );
}

export default MoviesCard;