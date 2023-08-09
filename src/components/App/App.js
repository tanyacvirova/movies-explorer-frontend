import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

/* contexts */
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

/* utils */
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import * as auth from '../../utils/Auth.js';

/* components */
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {
  /* declare variables */
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isMoreMoviesButtonVisible, setIsMoreMoviesButtonVisible] = useState(false);
  const [slicer, setSlicer] = useState((screenWidth > 425) ? 7 : 5);
  const [moviesErrorSectionStatus, setMoviesErrorSectionStatus] = useState(false);
  const [savedMoviesErrorSectionStatus, setSavedMoviesErrorSectionStatus] = useState(false);
  const [moviesErrorMessage, setMoviesErrorMessage] = useState('');
  const [savedMoviesErrorMessage, setSavedMoviesErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({ _id: '', name: '', email: '' });
  const [statusEditProfile, setStatusEditProfile] = useState({ status: '', message: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisibleNavBar, setIsVisibleNavBar] = useState(false);
  const [isCompletedDownload, setIsCompletedDownload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      setIsCompletedDownload(true);
      return;
    }
    setIsCompletedDownload(false);
    auth.getUserData(jwt)
      .then((user) => {
        setIsLoggedIn(true);
        mainApi.setToken(jwt);
        setCurrentUser({ _id: user._id, name: user.name, email: user.email });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsCompletedDownload(true);
      });
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    if (localStorage.getItem('movies')) {
      setFilteredMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    setIsLoading(true);
    moviesApi.getMovies()
      .then(data => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    setIsLoading(true);
    mainApi.getMovies()
      .then(data => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (filteredMovies.length > slicer) {
      setIsMoreMoviesButtonVisible(true);
    } else {
      setIsMoreMoviesButtonVisible(false);
    }
  }, [filteredMovies.length, slicer]);

  function handleCardLike(card) {
    const isLiked = savedMovies.some(function (item) {
      return item.nameRU === card.nameRU;
    });
    if (isLiked) {
      const cardId = savedMovies.find(function (item) {
        return item.nameRU === card.nameRU;
      })._id;
      mainApi.deleteMovie(cardId)
        .then(() => {
          const updated = savedMovies.filter(function (item) {
            return item.nameRU !== card.nameRU;
          });
          setSavedMovies(updated);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const newMovie = {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `https://api.nomoreparties.co${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      };
      mainApi.saveMovie(newMovie)
        .then((savedMovie) => {
          const updated = savedMovies.concat(savedMovie);
          setSavedMovies(updated);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleCardDelete(card) {
    mainApi.deleteMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(function (item) {
          return item.nameRU !== card.nameRU;
        }));
        setFilteredSavedMovies(filteredSavedMovies.filter(function (item) {
          return item.nameRU !== card.nameRU;
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMoreMoviesClick() {
    setSlicer(slicer + ((screenWidth > 425) ? 7 : 5));
  }

  useEffect(() => {
    setSlicer((screenWidth > 425) ? 7 : 5);
  }, [screenWidth]);

  function filterMovies(searchQuery, array) {
    let filteredArray;
    if (searchQuery['shortFilmFilter']) {
      filteredArray = array.filter((item) => {
        return ((item.nameRU.toLowerCase().includes(searchQuery['query'].toLowerCase()) || (item.nameEN.toLowerCase().includes(searchQuery['query'].toLowerCase()))) && item.duration < 40);
      });
    } else {
      filteredArray = array.filter((item) => {
        return item.nameRU.toLowerCase().includes(searchQuery['query'].toLowerCase()) || (item.nameEN.toLowerCase().includes(searchQuery['query'].toLowerCase()));
      });
    };
    return filteredArray;
  };

  function handleFilterMovies(searchQuery) {
    setMoviesErrorSectionStatus(false);
    localStorage.setItem('query', JSON.stringify(searchQuery));
    if (searchQuery.query.length < 1) {
      setFilteredMovies([]);
      localStorage.setItem('movies', JSON.stringify([]));
      setMoviesErrorSectionStatus(true);
      setMoviesErrorMessage('Нужно ввести ключевое слово');
    } else {
      const result = filterMovies(searchQuery, movies);
      setFilteredMovies(result);
      localStorage.setItem('movies', JSON.stringify(result));
      if (result.length < 1) {
        setMoviesErrorSectionStatus(true);
        setMoviesErrorMessage('Ничего не найдено');
      }
      setSlicer((screenWidth > 425) ? 7 : 5);
    };
  }

  function handleFilterSavedMovies(searchQuery) {
    setSavedMoviesErrorSectionStatus(false);
    setIsFiltered(true);
    if (searchQuery.query.length < 1) {
      setFilteredSavedMovies([]);
      setSavedMoviesErrorSectionStatus(true);
      setSavedMoviesErrorMessage('Нужно ввести ключевое слово');
    } else {
      const result = filterMovies(searchQuery, savedMovies);
      if (result.length < 1) {
        setFilteredSavedMovies([]);
        setSavedMoviesErrorSectionStatus(true);
        setSavedMoviesErrorMessage('Ничего не найдено');
      } else {
        setFilteredSavedMovies(result);
      }
    };
  }

  function handleEditButtonClick(info) {
    mainApi.editPersonalInfo(info)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        setStatusEditProfile({ status: 'OK', message: 'Данные успешно обновлены!' });
      })
      .catch((err) => {
        setStatusEditProfile({ status: 'ERROR', message: 'При обновлении профиля произошла ошибка.' });
        console.log(err);
      });
  }

  function logOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("query");
    localStorage.removeItem("movies");
    setIsLoggedIn(false);
    setCurrentUser({ _id: '', name: '', email: '' });
    navigate('/');
  }

  function handleLogIn(data) {
    auth.authorizeUser(data)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        mainApi.setToken(res.token);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSignUp(data) {
    console.log(data);
    auth.registerUser(data)
      .then((res) => {
        const logInData = { email: res.email, password: data.password };
        handleLogIn(logInData);
      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main
            isLoggedIn={isLoggedIn}
            onNavBarClick={() => { setIsVisibleNavBar(true) }}
            isVisibleNavBar={isVisibleNavBar}
            closeNavBar={() => { setIsVisibleNavBar(false) }}
          />} />
          <Route path="/movies" element={<ProtectedRoute element={Movies}
            movies={filteredMovies.slice(0, slicer)}
            savedMovies={savedMovies}
            isVisible={isMoreMoviesButtonVisible}
            isLoading={isLoading}
            onMoreMovies={handleMoreMoviesClick}
            onCardLike={(data) => handleCardLike(data)}
            onFindButton={(data) => handleFilterMovies(data)}
            errorSectionIsOn={moviesErrorSectionStatus}
            errorMessage={moviesErrorMessage}
            isLoggedIn={isLoggedIn}
            isCompletedDownload={isCompletedDownload}
            onNavBarClick={() => { setIsVisibleNavBar(true) }}
            isVisibleNavBar={isVisibleNavBar}
            closeNavBar={() => { setIsVisibleNavBar(false) }}
          />} />
          <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies}
            movies={isFiltered ? filteredSavedMovies : savedMovies}
            isVisible={false}
            isLoading={isLoading}
            onCardDelete={(data) => handleCardDelete(data)}
            onFindButton={(data) => handleFilterSavedMovies(data)}
            errorSectionIsOn={savedMoviesErrorSectionStatus}
            errorMessage={savedMoviesErrorMessage}
            isLoggedIn={isLoggedIn}
            isCompletedDownload={isCompletedDownload}
            onUnmount={() => setIsFiltered(false)}
            onNavBarClick={() => { setIsVisibleNavBar(true) }}
            isVisibleNavBar={isVisibleNavBar}
            closeNavBar={() => { setIsVisibleNavBar(false) }}
          />} />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              logOut={logOut}
              onEditButton={(data) => handleEditButtonClick(data)}
              statusEditProfile={statusEditProfile}
              isLoggedIn={isLoggedIn}
              isCompletedDownload={isCompletedDownload}
              onNavBarClick={() => { setIsVisibleNavBar(true) }}
              isVisibleNavBar={isVisibleNavBar}
              closeNavBar={() => { setIsVisibleNavBar(false) }}
            />}
          />
          <Route path="/signin" element={isLoggedIn ? <Navigate to="/profile" replace /> : <Login onLogInButton={(data) => handleLogIn(data)} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/profile" replace /> : <Register onSignUpButton={(data) => handleSignUp(data)} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
