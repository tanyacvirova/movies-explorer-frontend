import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from '../Footer/Footer';
import Navigation from "../Navigation/Navigation";

function Main(props) {
    return (
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                onNavBarClick={props.onNavBarClick}
            />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Navigation
                    isVisibleNavBar={props.isVisibleNavBar}
                    closeNavBar={props.closeNavBar}
                />
            </main>
            <Footer />
        </>

    );
}

export default Main;