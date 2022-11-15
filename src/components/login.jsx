import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="formContainer">
        <img src="images/PokePost.png" alt="PokePost Logo"></img>
        <form>
          <label id="loginEmailLbl">Email:</label>
          <input id="loginEmailTxt" type="text" />
          <label id="loginPassLbl">Password:</label>
          <input id="loginPassTxt" type="text" />
          <button
            id="loginSubmitBtn"
            type="submit"
            onSubmit={this.props.onLogin}
          >
            Login
          </button>
        </form>
        <Link to="/register">Don't have an account?</Link>
        <Link to="/resetpw">Forgot Password?</Link>
      </div>
    );
  }
}

export default Login;
