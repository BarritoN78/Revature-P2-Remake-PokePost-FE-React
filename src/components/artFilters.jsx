import React, { Component } from "react";

class ArtFilter extends Component {
  state = {};
  render() {
    return (
      <div>
        <label id="ArtFilterSlctLbl">Filter By:</label>
        <select id="ArtFilterSlct">
          <option value="title">Title</option>
          <option value="tags">Tags</option>
          <option value="artist">Artist</option>
        </select>
        <input id="ArtFilterTxt" type="text"></input>
        <button id="ArtFilterBtn" type="submit">
          Find
        </button>
      </div>
    );
  }
}

export default ArtFilter;
