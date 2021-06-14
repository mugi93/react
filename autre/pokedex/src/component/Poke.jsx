import React, { Component } from 'react'

export default class Poke extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="" />
                <h2>{this.props.name}</h2>
                <h2>{this.props.height}</h2>
                <h2>{this.props.weight}</h2>
                <h2>{this.props.type}</h2>

            </div>
        )
    }
}
