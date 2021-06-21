import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ListHero = () => {
    const [heros, setHeros] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get("http://localhost:8001/heroes")
            if (res.status === 200) {
                setHeros(res.data)
            }


        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div className="row">
            <h2>Liste heros</h2>
            {heros.map(elem => {
                return (
                    <div className="col-6">
                        <h3>{elem.name}</h3>
                    </div>
                )


            })}
        </div>
    )


}
export default ListHero