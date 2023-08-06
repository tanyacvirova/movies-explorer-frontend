class MainApi {
    constructor(path) {
        this._path = path;
        // this._token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFhODA3ZjJkN2QyYzlmNWNhMmVmMjAiLCJpYXQiOjE2OTA3MTg2ODgsImV4cCI6MTY5MTMyMzQ4OH0.fvs5v6K96hfj5uw0zIpGGFwsX3LLBQtyP3vRt7lm7wc';
    }

    _getHeaders() {
        return {
            'Content-Type': 'application/json',
            authorization: `Bearer ${this._token}`,
        }
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    setToken(token) {
        this._token = token;
    }

    getMovies() {
        return fetch(`${this._path}/movies`, {
            headers: this._getHeaders()
        })
            .then(this._getJson);
    }

    getCurrentUser() {
        return fetch(`${this._path}/users/me`, {
            headers: this._getHeaders()
        })
            .then(this._getJson);
    }

    editPersonalInfo(info) {
        return fetch(`${this._path}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify(info)
        })
            .then(this._getJson);
    }

    saveMovie(card) {
        return fetch(`${this._path}/movies`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(card)
        })
            .then(this._getJson);
    }

    deleteMovie(id) {
        return fetch(`${this._path}/movies/${id}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
            .then(this._getJson);
    }
}

const mainApi = new MainApi('https://api.movies-explorer.tt.nomoredomains.work');
export default mainApi;