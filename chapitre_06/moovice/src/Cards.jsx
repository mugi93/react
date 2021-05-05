import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        // const currentMovie = movies.find(elem=>{

            
           
        //     console.log("this.props.match.params.id", typeof this.props.match.params.id)

        //     console.log("elem.id", typeof elem.id)

        //     return (parseInt(this.props.match.params.id) === elem.id)
        // })
        return (
            <div>
                <img src=`https://image.tmdb.org/t/p/w300/`${this.props.movie.poster_path}`` />
                <ul>
                     <li>{this.props.movie.original_title}</li>
                     <li>{this.props.movie.release_date}</li>
                     <li>{this.props.movie.overview}</li>
                </ul>
               
            </div>
        )
    }
}
