// import React, { Component } from 'react'
// const axios = require('axios');

// export default class App extends Component {
//     state={
//       student:[]

//     }
//   componentDidMount(){
//     axios.get("http://localhost:9000/students")
//     .then(response=>{
//       console.log(response)
//       this.setState({
//         student:[...this.state.student,response]
//       })


//     })

//   }

//   render() {
//     console.log("jkj",this.state.student)
//     return (
//       <div>
//         <ul>
//           {this.state.student.map(elem=>{
//             console.log(elem)
//             return <li>{elem.data}</li>
//           }
//             )}
//         </ul>


//       </div>
//     )
//   }
// }
import { useState, useEffect } from 'react'
import axios from 'axios'

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("")

    useEffect(() => {

        const url = "http://localhost:9000/students"

        axios.get(url)
            .then(response => {
                setStudents(response.data)
            })

    }, []);
    // const studentAdd= ()=>{


    // }
    const handleChange = (e) => {
        setName({ name: e.target.value });
    }

    const handleSubmit = () => {


        axios.post(`http://localhost:9000/students`,()=>{

            setStudents ({students:students.push(name)})
            
        })
            
              
            
    }
    // console.log(name)
    // console.log(students)

    return (
        <div>

            <h2>List Students</h2>

            <ul>
                {
                    students.map(elem => {
                        return <li>{elem}</li>
                    })
                }
            </ul>
             <form >
                <label>

                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
            {/* <input placeholder="name" onChange={handleChange()}></input> */}
            {/* <button>send</button>  */}

        </div>

    );
}

export default StudentList;