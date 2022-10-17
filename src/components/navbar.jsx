import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { user } = this.props;
    const username = user ? user.username : undefined;
    const id = user ? user.id : undefined;
    return (
      <div>
        <Link to="/">
          <img src="https://picsum.photos/200" alt="PokePost logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            {id ? (
              <Link to={"/user/" + id}>{username}</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
