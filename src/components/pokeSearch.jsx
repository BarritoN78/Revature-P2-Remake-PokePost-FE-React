import React, { Component } from "react";

class PokeSearch extends Component {
  render() {
    return (
      <div>
        <p>
          Enter a keyword to find your pokemon.
          <br />
          This can be their name, type or location.
        </p>
        <input id="pokeSearchTxt" type="text"></input>
        <button id="pokeSearchBtn" type="submit">
          Find
        </button>
      </div>
    );
  }
}

export default PokeSearch;
