import React, { Component } from "react";
import ArtFilter from "./artFilters";
import ArtMini from "./artMini";

class Gallery extends Component {
  state = {
    fanart: [
      /* 
      {
        id: 0,
        title: "leedle",
        imgUrl: "https://picsum.photos/200",
        artist: { id: 0, username: "RandoMcGee" },
      },

      {
        id: 1,
        title: "lee",
        imgUrl: "https://picsum.photos/200",
        artist: { id: 0, username: "RandoMcGee" },
      },

      {
        id: 2,
        title: "leedledle",
        imgUrl: "https://picsum.photos/200",
        artist: { id: 0, username: "RandoMcGee" },
      }, */
    ],
  };
  render() {
    let { fanart } = this.state;
    return (
      <div>
        <ArtFilter />
        {(fanart && fanart.length) > 0 ? (
          fanart.map((art) => <ArtMini key={art.id} art={art} />)
        ) : (
          <p>There is no fanart available</p>
        )}
      </div>
    );
  }
}

export default Gallery;
