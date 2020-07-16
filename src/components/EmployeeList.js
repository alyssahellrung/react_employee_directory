import React from "react";

function EmployeeList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
         
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;