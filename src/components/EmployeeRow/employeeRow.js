import React from "react";

function EmployeeRow(props) {
  return (
    <div>
      <img src={props.imageURL} width="50px" height="50px" />
      <li>{props.first + " " + props.last}</li>
      <li>{props.phone}</li>
      <li>{props.email}</li>
      <li>{props.dob}</li>
    </div>
  );
}

export default EmployeeRow;
