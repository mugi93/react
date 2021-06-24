import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Hotel() {
    const [hotels, setHotels] = useState([])

    useEffect(async () => {
        try {
            const responses = await axios.get("http://localhost:8000/hotels/")

            if (responses) {
                setHotels(responses.data)
            }

        } catch (error) {
            console.error(error)
        }
    })




    return (

        <div>
            <h3>List of hotels: </h3>

            <ul>
                {
                    hotels.map((elem, index) => {
                        return <li key={index}>{elem.name}</li>
                    })
                }
            </ul>

        </div>
        
    )
}
