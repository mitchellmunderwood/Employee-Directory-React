import React from "react";
import SearchBar from "../SearchBar/searchBar";
import EmployeeTable from "../EmployeeTable/employeeTable";
import "./main.css";

function Main() {
  return (
    <div id="main">
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default Main;
