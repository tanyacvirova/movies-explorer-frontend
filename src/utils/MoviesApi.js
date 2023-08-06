class MoviesApi {
    constructor(path) {
        this._path = path;
    }

    _getHeaders() {
        return {
            'Content-Type': 'application/json',
        }
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(this._path, {
            headers: this._getHeaders()
        })
            .then(this._getJson);
    }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default moviesApi;