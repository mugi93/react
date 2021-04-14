import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {



  render() {
    return (
      <div class="offset-3 col-5">
        <h2 class="text-center mb-5">Login</h2>
        
          
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="enter email..."></input>
               
            </div>
              
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
                
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                  <button type="submit" class="btn btn-primary">Submit</button>


      </div>
    )
  }


}


export default App;
