import React from "react";
import movies from "../movies.json"



class Movieinfo extends React.Component {



    render() {
        const arr = [movies]
        return (
            <div>

                {movies[0].map(elem => {
                    console.log(elem.length)
                    console.log("elem:",elem)
                    return (
                        {<h2>{elem.title}</h2>}
                        
                        
                    )
                })}
                {/* <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
                <h2>title: A Wrinkle in Time</h2>
                <h2>director:Ava DuVernay </h2>
                <h2>stars: Storm Reid,
                    Oprah Winfrey,
                    Reese Witherspoon
                </h2>
                <p>Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil</p>
 */}




            </div>
        )
    }
}
export default Movieinfo