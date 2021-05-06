import React, { Component } from 'react'
import PopularBattle from './PopularBattle'

export default class Favorites extends Component {
    state={
        movies:[],
        favIDs :this.getStorage()
    }

    getStorage(){
        const favorites = localStorage.getItem("favorites")
        
        return favorites

    }
    getMovie(id){
        fetch `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`
        then(response => response.json())
            .then(data => {
            return data
            })
    }
    componentDidMount(){
        this.state.favIDs.map(elem=>{
            return this.getMovie(elem)
        })
    }




    render() {
        // console.log("localStorage", localStorage.getItem("favorites"))
        // console.log("fav",this.state.favIDs)
        return (
            <div>
                <h1>Favorites</h1>
                

            </div>
        )
    }
}
