import React, { Component } from "react";
import { Link } from "react-router-dom";

class PokeMini extends Component {
  state = {};
  render() {
    let { pokemon } = this.props;
    return (
      <div className="miniContainer">
        <Link className="pokeMiniSprite" to={"/pokemon/" + pokemon.id}>
          <img
            className="pokeMiniSprite"
            src={pokemon.sprite}
            alt={pokemon.name}
          ></img>
        </Link>
        <Link className="pokeMiniName" to={"/pokemon/" + pokemon.id}>
          <p className="pokeMiniName">{pokemon.name}</p>
        </Link>
      </div>
    );
  }
}

export default PokeMini;
