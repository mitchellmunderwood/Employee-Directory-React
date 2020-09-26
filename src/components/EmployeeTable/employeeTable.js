import React from "react";
import "./employeeTable.css";
import EmployeeList from "../EmployeeList/employeeList";

function EmployeeTable(props) {
  return (
    <div id="table">
      <div id="tableHeader">
        <p id="nameHeader">Name</p>
        <p id="phoneHeader">phone</p>
        <p id="emailHeader">emial</p>
        <p id="dobHeader">dob</p>
      </div>

      {/* <EmployeeList selected={props.selected} /> */}
    </div>
  );
}

export default EmployeeTable;
