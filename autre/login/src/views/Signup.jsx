import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");

    

    const [userCreated, setUserCreated] = useState(false);

    
    const signup = async () => {
        try {
            const response = await axios.post("http://localhost:8000/log/signup", { email, password })

            console.log(response);
            if (response.status === 200) {
                setUserCreated(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (userCreated) {
        return ("User created!")
    } else {
        return (
            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">firstname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="firstname" onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="surname" className="col-sm-2 col-form-label">surname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="surname" onChange={(e) => setSurname(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="date" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    
                    <div className="mb-3 row">
                        <button type="submit" className="btn btn-primary mb-3" onClick={signup}>Signup</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
