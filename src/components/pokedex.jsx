import React, { Component } from "react";
import PokeSearch from "./pokeSearch";
import PokeMini from "./pokeMini";

class Pokedex extends Component {
  state = {
    pokedex: [
      /*
      {
        id: 0,
        name: "leedle",
        sprite: "https://picsum.photos/200",
      },

      {
        id: 1,
        name: "lee",
        sprite: "https://picsum.photos/200",
      },

      {
        id: 2,
        name: "leedledle",
        sprite: "https://picsum.photos/200",
      },*/
    ],
  };
  render() {
    let { pokedex } = this.state;
    return (
      <div>
        <PokeSearch />
        {(pokedex && pokedex.length) > 0 ? (
          pokedex.map((pokemon) => (
            <PokeMini key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>There are no pokemon available</p>
        )}
      </div>
    );
  }
}

export default Pokedex;
