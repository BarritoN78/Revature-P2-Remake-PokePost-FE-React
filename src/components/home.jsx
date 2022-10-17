import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          This is the home page for the site. <br />I intend to add links to the
          other pages in the content of this page
        </p>
        <div className="homeGalleryLink">
          <p>See what the artistic fans of Pokemon have posted to the site</p>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="homePokeLink">
          <p>
            Need help capturing a pokemon? <br />
            Find useful information about it and chat with other players about
            strategies here
          </p>
          <Link to="/pokemon">Pokemon</Link>
        </div>
      </div>
    );
  }
}

export default Home;
