import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const currentLocation = window.location.pathname;

    return (
        <section className="cardlist">
            {props.movies.map(card => {
                return (<MoviesCard
                    key={(currentLocation === '/movies') ? card.id : card._id}
                    card={card}
                    savedMovies={props.savedMovies}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete} />);
            })}
        </section>
    );
}

export default MoviesCardList;