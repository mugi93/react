import moment from 'moment'

export const getLatestMovies = () => {
    const today = moment().format("YYYY-MM-DD")
    const lastWeek = moment().subtract(1, 'week').format("YYYY-MM-DD")

    const url = `http://localhost:9001/movie/${lastWeek}/${today}`

    return fetch(url)
        .then(response => response.json())
}


export const getPopularMovies = () => {
    const url = "http://localhost:9001/movie"

    return fetch(url)
        .then(response => response.json())
} 

export const getMovieAPI = (id) => {
    const url = `http://localhost:9001/movie/${id}`

    return fetch(url)
        .then(response => response.json())
}