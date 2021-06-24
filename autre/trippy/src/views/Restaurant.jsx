import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Hotel() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(async () => {
        try {
            const responses = await axios.get("http://localhost:8000/restaurants/")

            if (responses) {
                setRestaurants(responses.data)
            }

        } catch (error) {
            console.error(error)
        }
    })




    return (

        <div>
            <h3>List of restaurants: </h3>

            <ul>
                {
                    restaurants.map((elem, index) => {
                        return <li key={index}>{elem.name}</li>
                    })
                }
            </ul>

        </div>
        
    )
}
