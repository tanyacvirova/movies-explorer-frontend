import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ExtraSection from "../ExtraSection/ExtraSection";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ErrorSection from "../ErrorSection/ErrorSection";

function Movies(props) {
    return (
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                onNavBarClick={props.onNavBarClick}
            />
            <section className="movies">
                <SearchForm onFindButton={props.onFindButton} query={props.query} />
                {props.errorSectionIsOn && <ErrorSection message={props.errorMessage} />}
                {props.isLoading ? <Preloader /> : <MoviesCardList
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete}
                />}
                <ExtraSection isVisible={props.isVisible} onMoreMovies={props.onMoreMovies} />
                <Navigation
                    isVisibleNavBar={props.isVisibleNavBar}
                    closeNavBar={props.closeNavBar}
                />
            </section>
            <Footer />
        </>
    );
}

export default Movies;