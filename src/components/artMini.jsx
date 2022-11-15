import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArtMini extends Component {
  state = {};
  render() {
    let { art } = this.props;
    return (
      <div className="miniContainer">
        <Link className="artMiniTitle" to={"/fanart/" + art.id}>
          <p className="artMiniTitle">{art.title}</p>
        </Link>
        <Link className="artMiniImg" to={"/fanart/" + art.id}>
          <img
            className="artMiniImg"
            src={art.imgUrl}
            alt="Created by a fan"
          ></img>
        </Link>
        <Link className="artMiniArtist" to={"/user/" + art.artist.id}>
          <p className="artMiniArtist">{art.artist.username}</p>
        </Link>
      </div>
    );
  }
}

export default ArtMini;
