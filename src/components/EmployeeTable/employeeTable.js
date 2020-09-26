import React from "react";
import "./employeeTable.css";
import EmployeeList from "../EmployeeList/employeeList";

function EmployeeTable(props) {
  return (
    <div id="table">
      <div id="tableHeader">
        <p id="imgHeader">Image</p>
        <p id="nameHeader">Name</p>
        <p id="phoneHeader">Phone</p>
        <p id="emailHeader">Email</p>
        <p id="dobHeader">DOB</p>
      </div>

      <EmployeeList selected={props.selected} />
    </div>
  );
}

export default EmployeeTable;
