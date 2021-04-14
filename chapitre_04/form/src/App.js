import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: ""
    }
    this.validator = this.validator.bind(this)
  }
  validator(e) {
    this.setState({
      mails: e.target.value
    })

  }
  mailvalid() {
    if (this.state.mails.indexOf("@") === -1 && this.state.mails.indexOf(".") === -1) {
      return "form-control is-invalid"

    }else{
      return "form-control is-valid"
    }
  }



  render() {
    return (
      <div class="offset-3 col-5">
        <h2 class="text-center mb-5">Login</h2>


        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className={this.mailvalid()} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email..." value={this.state.mails} onInput={this.validator} ></input>

        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ></input>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>


      </div>
    )
  }


}


export default App;
