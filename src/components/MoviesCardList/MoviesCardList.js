import MoviesCard from "../MoviesCard/MoviesCard";
import { cards, savedCards } from "../../utils/cards.js";

function MoviesCardList() {
    const currentLocation = window.location.pathname;

    let cardList;
    if (currentLocation === '/movies') {
        cardList = cards;
    } else if (currentLocation === '/saved-movies') {
        cardList = savedCards
    };

    return (
        <section className="cardlist">
            {cardList.map(card => {
                return (<MoviesCard key={card.id} card={card} />);
            })}
        </section>
    );
}

export default MoviesCardList;