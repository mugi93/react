import React, { Component } from 'react'
import Cards from '../Cards';

export default class Popular extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }
    componentDidMount() {



        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"


        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log(movie);
                console.log(movie.results)
                 console.log(movie.results.original_title);
                 console.log(movie.results.length)
                //  const arr =[]
                //  for(let i=0;i<movie.results.length;i++){
                //       arr.push(movie.results[i])
                //      console.log(arr)

                //  }
                 
                 this.setState({
                    movies:movie.results
                })
            })
    }



    render() {
        return (
         <div>
            <h1>Popular</h1>
            <Cards movie={this.state.movies}/>
         </div>
        )
    }
}
