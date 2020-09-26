import React from "react";
import "./employeeTable.css";
import EmployeeList from "../EmployeeList/employeeList";

function EmployeeTable(props) {
  return (
    <div id="table">
      <div id="tableHeader">
        <p onClick={props.OnFilter} id="img">
          Image
        </p>
        <p onClick={props.OnFilter} id="name">
          Name
        </p>
        <p onClick={props.OnFilter} id="phone">
          Phone
        </p>
        <p onClick={props.OnFilter} id="email">
          Email
        </p>
        <p onClick={props.OnFilter} id="dob">
          DOB
        </p>
      </div>

      <EmployeeList selected={props.selected} />
    </div>
  );
}

export default EmployeeTable;
