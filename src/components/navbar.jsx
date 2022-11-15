import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { user } = this.props;
    const username = user ? user.username : undefined;
    const id = user ? user.id : undefined;
    return (
      <nav>
        <Link className="navLinkList" to="/">
          <img
            className="navLinkList"
            src="/images/PokePost.png"
            alt="PokePost logo"
          />
        </Link>
        <ul className="navLinkList">
          <li className="navLinkList">
            <Link className="navLinkList" to="/">
              Home
            </Link>
          </li>
          <li className="navLinkList">
            <Link className="navLinkList" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="navLinkList">
            <Link className="navLinkList" to="/pokemon">
              Pokemon
            </Link>
          </li>
        </ul>
        {id ? (
          <Link className="navLinkList navLinkRight" to={"/user/" + id}>
            {username}
          </Link>
        ) : (
          <Link className="navLinkList navLinkRight" to="/login">
            Login
          </Link>
        )}
      </nav>
    );
  }
}

export default Navbar;
