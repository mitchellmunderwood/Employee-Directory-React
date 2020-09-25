import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div id="SearchBar">
      <input
        onChange={props.handleSearch}
        type="search"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default SearchBar;
