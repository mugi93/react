import React, { Component } from 'react';
import Card  from '..//components/Cards'



class Popular extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        const url = "http://localhost:9001/movie"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in popular component did mount", data);
                console.log(  typeof data)

                this.setState({
                    movies: data                })
            })
    }

    render() {
        console.log(typeof this.state.movie)
        return (
            <div>
                <h1>Popular</h1>

                <div className="row">
                    {
                        this.state.movies.map(elem => {
                            console.log(typeof elem);
                            console.log(elem.title);
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

export default Popular;