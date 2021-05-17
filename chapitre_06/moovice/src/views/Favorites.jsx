import React, { Component } from 'react'
import PopularBattle from './PopularBattle'
import Card from "../components/Cards.jsx"

export default class Favorites extends Component {
    state = {
        movies: [],
        favIDs: this.getStorage()
    }

    getStorage() {
        const favorites = localStorage.getItem("favorites")
        const arrfavorites=JSON.parse(favorites)
        // console.log("favor", typeof(arrfavorites))

        return arrfavorites

    }

    getMovie(id) {
        // const ids = id.toString()
        // console.log(ids)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`)
            .then(response => response.json())
            .then(data => {
               
                
                this.setState({
                    movies:[...this.state.movies, data]
                })
            })
            // console.log(this.state.movies);
    }


    componentDidMount() {
        // console.log("fav", this.state.favIDs)
        this.state.favIDs.map(elem => {
            
            return this.getMovie(elem)
        })
    }





    render() {
       console.log(this.state.movies.title);
        // console.log("localStorage", localStorage.getItem("favorites"))
        // console.log("fav",this.state.favIDs)
        return (
            <div>
                <h1>Favorites</h1>
                <Card
                        title={this.state.movies.title}
                        poster_path={this.state.movies.poster_path}
                        release_date={this.state.movies.release_date}
                        overview={this.state.movies.overview}
                    />



            </div>
        )
    }
}
