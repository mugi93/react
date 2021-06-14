import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="" />

                <h3>{this.props.name}</h3>
                
            </div>
        )
    }
}
