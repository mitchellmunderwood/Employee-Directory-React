import React from "react";
import "./employeeRow.css";

function EmployeeRow(props) {
  return (
    <div className="employeeRow">
      <img src={props.imageURL} width="50px" height="50px" />
      <p class="name">{props.first + " " + props.last}</p>
      <p class="phone">{props.phone}</p>
      <p class="email">{props.email}</p>
      <p class="dob">{props.dob}</p>
    </div>
  );
}

export default EmployeeRow;
