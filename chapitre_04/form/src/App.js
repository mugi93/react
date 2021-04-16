import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: "",
      pass: ""
    }
    this.validator = this.validator.bind(this)
    this.validatori = this.validatori.bind(this)
  }
  validator(e) {
    this.setState({
      mails: e.target.value
    })

  }
  validatori(e) {
    this.setState({
      pass: e.target.value

    })
  }
  passvalid() {
    if (this.state.pass.length < 4) {
      return "form-control is-invalid"
    } else {
      return "form-control is-valid"
    }
  }

  mailvalid() {
    if (this.state.mails.indexOf("@") === -1 || this.state.mails.indexOf(".") === -1) {
      return "form-control is-invalid"

    } else {
      return "form-control is-valid"
    }
  }

  submit() {
    if (this.state.mails.indexOf("@") === -1 || this.state.pass < 4) {
      return "btn btn-primary disabled"

    } else {
      return "btn btn-primary"

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
          <input type="password" className={this.passvalid()} id="exampleInputPassword1" placeholder="Password" value={this.state.pass} onInput={this.validatori}></input>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className={this.submit()}>Submit</button>


      </div>
    )
  }


}


export default App;
