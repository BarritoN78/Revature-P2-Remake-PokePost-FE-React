import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="formContainer">
        <img src="https://picsum.photos/200" alt="PokePost Logo"></img>
        <form>
          <label id="loginEmailLbl">Email:</label>
          <input id="loginEmailTxt" type="text" />
          <label id="loginUNLbl">Username:</label>
          <input id="loginUNTxt" type="text" />
          <label id="loginFNLbl">First Name:</label>
          <input id="loginFNTxt" type="text" />
          <label id="loginLNLbl">Last Name:</label>
          <input id="loginLNTxt" type="text" />
          <label id="loginNewPassLbl">New Password:</label>
          <input id="loginNewPassTxt" type="text" />
          <label id="loginConfirmPassLbl">Confirm Password:</label>
          <input id="loginConfirmPassTxt" type="text" />
          <button
            id="loginSubmitBtn"
            type="submit"
            onSubmit={this.handleRegistration}
          >
            Register
          </button>
        </form>
        <Link to="/login">Already have an account?</Link>
      </div>
    );
  }
}

export default Register;
