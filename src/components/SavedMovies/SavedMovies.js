import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ExtraSection from "../ExtraSection/ExtraSection";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <>
            <Header />
            <section className="seved-movies">
                <SearchForm />
                {/* <Preloader /> */}
                <MoviesCardList />
                <ExtraSection />
                <Navigation />
            </section>
            <Footer />
        </>

    );
}

export default SavedMovies;