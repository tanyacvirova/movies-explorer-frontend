import { useState, useEffect } from "react";

function SearchForm(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [shortFilmFilter, setShortFilmFilter] = useState(false);
    const currentLocation = window.location.pathname;

    useEffect(() => {
        if ((localStorage.getItem('query')) && (currentLocation === '/movies')) {
            setSearchQuery(JSON.parse(localStorage.getItem('query'))['query']);
            setShortFilmFilter(JSON.parse(localStorage.getItem('query'))['shortFilmFilter']);
        }
    }, [currentLocation]);

    function handleSearchQueryChange(e) {
        setSearchQuery(e.target.value);
    }

    function handleShortFilmFilterChange(e) {
        setShortFilmFilter(e.target.checked);
        props.onFindButton({
            'query': searchQuery,
            'shortFilmFilter': e.target.checked
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onFindButton({
            'query': searchQuery,
            'shortFilmFilter': shortFilmFilter
        });
    }

    return (
        <section className="search">
            <form className="search__form" noValidate onSubmit={handleSubmit}>
                <input className="search__input" type="text" placeholder="Фильм" value={searchQuery} onChange={handleSearchQueryChange} />
                <button className="search__find-button" type="submit">Найти</button>
            </form>
            <label className="search__filter">
                <input className="search__input" type={"checkbox"} checked={shortFilmFilter} onChange={handleShortFilmFilterChange} />
                <span className="search__pseudo-input" />
                <span className="search__caption">Короткометражки</span>
            </label>
        </section>
    );
}

export default SearchForm;