import React from "react";
import "./employeeList.css";
import EmployeeRow from "../EmployeeRow/employeeRow";

function EmployeeList(props) {
  const rows = props.selected.map((employee) => (
    <EmployeeRow
      first={employee.name.first}
      last={employee.name.last}
      phone={employee.cell}
      email={employee.email}
      dob={employee.dob.date}
      imageURL={employee.picture.thumbnail}
    />
  ));

  return rows;
}

export default EmployeeList;
