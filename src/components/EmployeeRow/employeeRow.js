import React from "react";
import "./employeeRow.css";

function EmployeeRow(props) {
  return (
    <div className="employeeRow">
      <img src={props.imageURL} width="50px" height="50px" />
      <p>{props.first + " " + props.last}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.dob}</p>
    </div>
  );
}

export default EmployeeRow;
