import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1 id="title">Employee Directory</h1>
      <h3 id="subtitle">
        Search in the search box or Filter by clicking on the table header
      </h3>
    </div>
  );
}

export default Header;
