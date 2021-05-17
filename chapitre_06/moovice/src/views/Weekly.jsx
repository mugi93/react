import React, { Component } from 'react'
import Card from "../components/Cards"

import moment from 'moment'

export default class Weekly extends Component {


    state = {
        movies: []
    }

    componentDidMount() {
        const LAST_WEEK=moment().subtract(1, 'weeks').startOf('isoWeek').format('YYYY-MM-DD')
        const TODAY=moment().format("YYYY-MM-DD") 
        console.log(LAST_WEEK);
        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=e441f8a3a151d588a4932d2c5d310769`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in popular component did mount", data);

                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Weekly</h1>

                <div className="row">
                    {
                        this.state.movies.map(elem => {
                            return (
                                <div className="col-6">
                                    <Card {...elem} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}