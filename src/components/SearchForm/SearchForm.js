import { useState } from "react";

function SearchForm() {
    const [isOnFilterButton, setIsOnFilterButtonStatus] = useState(false);

    const handleButtonClick = () => {
        if (isOnFilterButton) {
            setIsOnFilterButtonStatus(false);
        } else {
            setIsOnFilterButtonStatus(true);
        }
    };

    return (
        <section className="search">
            <form className="search__form" noValidate>
                <input className="search__input" placeholder="Фильм"></input>
                <button className="search__find-button" type="submit">Найти</button>
            </form>
            <div className="search__filter">
                <button className={isOnFilterButton ? "search__filter-button search__filter-button_on" : "search__filter-button search__filter-button_off"} onClick={handleButtonClick}></button>
                <p className="search__caption">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;